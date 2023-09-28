import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import report from '../images/report.pdf'
import '../Styles/Graphic.css'
const GraphicRes = () => {
  const fileUrl = "https://drive.google.com/file/d/19Ib1nhrnGfJocOQwSi_tkcNseEbIjZmf/view?usp=sharing";
  const downloadFile = () => {
    // Replace 'your_file_url' with the actual URL of the file you want to download

    // Create a hidden anchor element
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = fileUrl;

    // Set the download attribute to specify the file name
    anchor.download = 'report.pdf';

    // Append the anchor to the body and trigger a click event
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  };
  return (
    <div className='p-[20px] my-[10px] mx-[30px]'>
      <div className='heading-div'>
        <h1 className="heading">Graphical Data Representation</h1>
      </div>

      <div className='main-con'>

        <div className='graph-con'>
          <div className='heading-div'>
            <h1 >Yearly Analysis</h1>
          </div>
          <div className='graph-div'>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={500}
              height={300}
            />
          </div>

        </div>
        <div className='graph-con'>
          <div className='heading-div'>
            <h1>Gender Wise Analysis</h1>
          </div>
          <div className='graph-div'>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Male' },
                    { id: 1, value: 15, label: 'Female' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className='graph-con'>
          <div className='heading-div'>
            <h1 >Area Wise Analysis</h1>
          </div>
          <div className='graph-div'>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Urban' },
                    { id: 1, value: 15, label: 'Rural' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>

        <div className='graph-con'>
          <div className='heading-div'>
            <h1>Caste Wise Analysis</h1>
          </div>
          <div className='graph-div'>
            <PieChart
              series={[
                {
                  data: [
                    { id: 1, value: 15, label: 'OBC' },
                    { id: 0, value: 10, label: 'Open' },
                    { id: 1, value: 15, label: 'SC' },
                    { id: 1, value: 15, label: 'ST' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>

      </div>
      <div className='flex justify-start'>
        <button className='btn w-[100px]'>
        <a href={fileUrl} target='_blank'>Download Report</a>
        </button>
      </div>
    </div>
  )
}

export default GraphicRes
