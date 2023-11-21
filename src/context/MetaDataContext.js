"use client"
import { getDocuments } from '@/firebase/getData';
import React from 'react';

export const MetaDataContext = React.createContext({});

export const useMetaDataContext = () => React.useContext(MetaDataContext);



export const MetaDataContextProvider = ({
    children,
}) => {
    const [metaData, setMetaData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null)

    
    React.useEffect(() => {
        async function getMetaData(){
            const {error, result} = await getDocuments("metaData");
            console.log(result)
            if(error){
                setLoading(false)
                setError("Error");
            }
            else{
                setMetaData(result)
                setLoading(false)
                setError(false)
            }
        }
       setMetaData([]);
       setLoading(true);
       setError(null);
       getMetaData()

    }, []);
    if(error){
        console.log(error)
    }
    return (
        <MetaDataContext.Provider value={{ metaData }}>
            {loading ? <div>Loading MetaData...</div> : children}
        </MetaDataContext.Provider>
    );
};