import react,{useEffect, useState} from "react";
import Card from './Card';


let API_key="&api_key=da5e8221cfe08fa35c06244adf1ae254";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Drama","Comedy"];
const Main =()=>{
    
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);

    const [search, setSearch]=useState(); 

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            // console.log(data.results);
            setData(data.results);
        });
    },[url_set])

   

    const getData=(movieType)=>{
        if(movieType=="Popular"){
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre"){
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Drama"){
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedy"){
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter"){
            // console.log("Hello")
            url=base_url+"/search/movie?api_key=da5e8221cfe08fa35c06244adf1ae254&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
        <>
        <div className="main">
            <div className="header">
            <form>
                    <div className="search-btn">
                            <input type="text" placeholder="Enter Movie Name" 
                            className="inputText" onChange={(e)=>{setSearch(e.target.value)}}
                             value={search} onKeyPress={searchMovie}> 

                            </input>
                            <button><i class="fa-solid fa-film"></i></button>
                    </div>
                </form>
                <nav>
                    <ul>
                        {
                            arr.map((value)=>{
                                return(
                                    <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
                        
                      
                    </ul>
                </nav>
              
            </div>
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">Not Found!</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}

export default Main