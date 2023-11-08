import axios from 'axios';

function Fetch(search: string) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTQ0MTkxNGM4NjI1MzVmNTI2MGM1NzY5Y2I2MzgwMiIsInN1YiI6IjY1NGI1NWU3NjdiNjEzMDEwMmUxOTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYxb6KIzuFbAazPCLJ2Pu30zC89yk7xEDLSBMwkxvHs'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}?include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export default Fetch;