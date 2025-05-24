import styled from "styled-components"

/**Portfolio-erick - version 21.04 - GitChart - Features:
 * 
 *      --> Building 'GitChart'
 * 
 * Notes: This component soon will be refactored to work more efficent
 * and hold more complete information
 */

const GitChartWrapper = styled.div` 
.main {
  display: flex;
  flex-wrap: wrap;
  width: 15em;
  align-items: center;
  justify-content: center;
}

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
    <div class="main">
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
    </div>
    </GitChartWrapper>
 )
}

export default GitChart;