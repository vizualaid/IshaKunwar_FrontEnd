import React from 'react';
import List from './List';
// import GeeksforGeeksData from './GeeksforGeeksData';
function App() {
  // const [rank, setRank] = useState(null);
  // const [totalProblemsSolved, setTotalProblemsSolved] = useState(null);

  // useEffect(() => {
  //   fetch('https://coding-platform-profile-api.onrender.com/geeksforgeeks/kunwarisha9')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRank(data.collage_rank);
  //       setTotalProblemsSolved(data.total_problems_solved);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div>
      {/* <p>Total Problems Solved: </p> */}
      {/* <GeeksforGeeksData/> */}

    <List/>
      {/* <p>Rank: {rank}</p>
      <p>Total Problems Solved: {totalProblemsSolved}</p> */}
    </div>
  );
}

export default App;
