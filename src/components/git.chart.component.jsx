import styled from "styled-components"

/**Portfolio-erick - version 22.05 - GitChart - Features:
 * 
 *      --> Building 'MainChart'
 * 
 * Notes: This component soon will be refactored to work more efficent
 * and hold more complete information
 */

const MainChart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 15em;
  align-items: center;
  justify-content: center;
`

const GitChartWrapper = styled.div` 

.card {
  width: 40px;
  height: 40px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  margin: 0.2em;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: 2s loading90 infinite;
}

.card:nth-child(2) {
  animation-delay: 1s;
}

.card:nth-child(4) {
  animation-delay: 1s;
}

.card:nth-child(6) {
  animation-delay: 1s;
}

.card:nth-child(8) {
  animation-delay: 1s;
}

.card:nth-child(10) {
  animation-delay: 1s;
}

.card:nth-child(12) {
  animation-delay: 1s;
}

.card:nth-child(14) {
  animation-delay: 1s;
}

@keyframes loading90 {
  0% {
    background: rgba(255, 255, 255, 0.2);
  }

  50% {
    background: limegreen;
  }

  100% {
    background: rgba(255, 255, 255, 0.2);
  }
}
`

const GitChart = () => {

  return(
    <GitChartWrapper>
    <MainChart>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </MainChart>
    </GitChartWrapper>
 )
}

export default GitChart;