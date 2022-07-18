import { useContext, createContext } from 'react';
import { Apidata } from './APIData.js'
import { Apibuild } from './APIBuild.js'

export const MainContext = createContext(joinData(Apidata, Apibuild));

  function joinData(apiData, apiBuilds){
    const data = {dofus:apiData.apiData, builds:apiBuilds.apiBuild};
    return data;
  }
