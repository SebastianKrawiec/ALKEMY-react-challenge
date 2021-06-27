import React from 'react';
import "./allHeroes.css";
/* import {baseUrl} from "../../../API"; */

const AllHeroes = () => {

/* const [loaded, setLoaded] = useState(false);
const [error, setError] = useState("");
const [heroesList, setHeroesList] = useState(null); */

/* useEffect(() => {
    const fetchApi = async () => {

        try{
            setLoaded(false)
            let ele = {};
            for(let i = 1; i < 4; i++){     
                const res = await fetch(`${baseUrl}${[i]}`);
                const data = await res.json();
                return ele = {id: data.id, name:data.name};                
            }

            console.log(ele)
       
        } catch(err) {
            setError(err)
        
        } finally {
            setLoaded(true)
        }   
    }

    
    fetchApi();

},[])
 */
/* console.log(heroesList) */


    return (
        <section className="all-heroes">
            <table className="table--all-heroes">
                <thead>
                    <tr>
                        <td>name</td>
                        <td>id</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {heroesList.map((ele,i) => {
                        return(
                            <tr key={i}>
                                <td>{ele}</td>
                                <td>{ele}</td>
                            </tr>
                        )
                    })
                    } */}
                </tbody>
            </table>
        </section>
    );
}

export default AllHeroes;
