import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Navbar from '../components/Navbar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {

    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Состав шихты',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
      
      const [data, setData] = useState({
        labels: ['04.05.2021 09:50', '2021-05-04T10:30:40', '2021-05-04T11:05:52', 
        '2021-05-04T11:05:52', '09.10.2021 10:30', '2021-05-04T11:44:28', '2021-05-04T12:26:10'],
        datasets: [
          {
            label: 'Агломерат ЗСМК курпный',
            data: [23.9,26.2,27.2,27.3, 27.4 , 26,9],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Агломерат ЗСМК2 курпный',
            data: [22.9,26.2,27.2,13.3, 2.4 , 11,9],
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Агломерат ЗСМК3 курпный',
            data: [2.9,46.2,22.2,17.3, 57.4 , 16,9],
            backgroundColor: 'rgb(53, 162, 235)',
          },
          {
            label: 'Агломерат ЗСМК4 курпный',
            data: [13.9,16.2,27.2,47.3, 17.4 , 26,9],
            backgroundColor: 'rgb(53, 12, 235)',
          },
        ],
      })
      
        const addItemToDataset = (label, newData, backgroundColor='red') => {
            try {
                if(!label || !newData ){
                    alert('Введите данные корректно')
                    throw new Error('Введите данные корректно')
                }
                if(!Array.isArray(newData)){
                    alert('Введите данные корректно')
                    throw new Error('Введите данные корректно')
                }
                setData( prev =>  ({...prev, datasets: [...prev.datasets, {label, data:newData, backgroundColor}]} ))
                
            } catch (error) {
                console.log(error);
            }
        }
        const updateItemInDataset = (date, prevName, value, name=null) => {
            try {
                if(!date || !prevName || !value){
                    alert("Заполните значения")
                    throw new Error('Поля не заполнены')
                }
                const index =  data.labels.indexOf(date)
                console.log(index);
                if(index === -1){
                    alert('Значение не найдено')
                    throw new Error('Поля не заполнены')
                }
                const obj = JSON.parse(JSON.stringify(data))
                obj.datasets.find( i => i.label === prevName).data[index] = value
                name ? obj.datasets.find( i => i.label === prevName).label = name : obj.datasets.find( i => i.label === prevName).label = prevName
                setData(obj)
            } catch (error) {
                console.log(error);
            }
        }
    return(
        <>
        <Navbar data={data} addItemToDataset={addItemToDataset} updateItemInDataset={updateItemInDataset}/>
        <div id="chart" style={{width: '100%', height: '100%'}}>
           <Bar options={options} data={data} style={{width: '50%', height: '50%'}} />
         </div>
         <button onClick={ () => updateItemInDataset('2021-05-04T10:30:40','Агломерат ЗСМК3 курпный', 12.1)}>dgsghsfh</button>
         </>
    )

}

export default Home