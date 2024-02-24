/* Script for changing Drupal CMS article style */

document.addEventListener('DOMContentLoaded', function () {
  const scrollAnimationContainer = document.createElement('div');
  scrollAnimationContainer.classList.add('scroll-animation-container');

  const progressIndicator = document.createElement('div');
  progressIndicator.classList.add('progress-indicator');
  progressIndicator.textContent = '2000';

  scrollAnimationContainer.appendChild(progressIndicator);

  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.insertBefore(scrollAnimationContainer, mainContent.firstChild);
  } else {
    console.error('.main-content not found');
  }

  // Append the .chart div to the body or a specific container on your page
  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart');
  scrollAnimationContainer.appendChild(chartContainer); // Append it where it makes sense for your layout

  initD3Chart(); // Call this function to initialize the chart after creating the chart container
});

function interpolateColor(factor) {
  const startColor = { r: 0, g: 0, b: 0 }; // White
  const endColor = { r: 200, g: 200, b: 200 }; // Dark Gray
  const r = Math.round(startColor.r + (endColor.r - startColor.r) * factor).toString(16);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * factor).toString(16);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * factor).toString(16);
  return "#" + ("0" + r).slice(-2) + ("0" + g).slice(-2) + ("0" + b).slice(-2);
}

// Function to update chart based on scroll
function updateChartColor(progress) {
  // Select barChart
  var barChart = d3.selectAll('rect');

  barChart.style('fill', function () {
    return interpolateColor(progress);
  });
}

// GLOBAL CHART VARIABLES

// Select five countries from the data and store in an array
const countries = ['Myanmar', 'CAR', 'Palestine', 'Somalia', 'South Sudan', 'Syrian Arab Republic', 'Yemen'];

// Example min and max y values for each year
const minMaxY = [
  {
    2000: 100
  }, {
    2001: 100
  }, {
    2002: 100
  }, {
    2003: 100
  }, {
    2004: 100
  }, {
    2005: 100
  }, {
    2006: 100
  }, {
    2007: 100
  }, {
    2008: 100
  }, {
    2009: 100
  }, {
    2090: 100
  }, {
    2011: 100
  }, {
    2012: 100
  }, {
    2013: 100
  }, {
    2014: 100
  }, {
    2015: 100
  }, {
    2016: 100
  }, {
    2017: 100
  }, {
    2018: 100
  }, {
    2019: 100
  }, {
    2020: 100
  }, {
    2021: 100
  }, {
    2022: 100
  }, {
    2023: 200
  },
]; // Extend this as needed

// Define the grid lines you want to show for each year
const gridLinesByYear = {
  2000: [5, 10, 100], // Grid lines at 5 and 10 for the year 2000
  2001: [5, 10, 100],
  2002: [5, 10, 100],
  2003: [5, 10, 100],
  2004: [5, 10, 100],
  2005: [5, 10, 100],
  2006: [5, 10, 100],
  2007: [5, 10, 100],
  2008: [5, 10, 100],
  2009: [5, 10, 100],
  2010: [5, 10, 100],
  2011: [5, 10, 100],
  2012: [5, 10, 100],
  2012: [5, 10, 100],
  2013: [5, 10, 100],
  2014: [5, 10, 100],
  2015: [5, 10, 100],
  2016: [5, 10, 100],
  2017: [5, 10, 100],
  2018: [5, 10, 100],
  2019: [5, 10, 100],
  2020: [5, 10, 100],
  2021: [5, 10, 100],
  2022: [5, 10, 100],
  2023: [5, 10, 200]
};

// Define chart dimensions
let svgWidth = 800, svgHeight = 400, barPadding = 5;
let margin = { top: 50, right: 50, bottom: 50, left: 100 }; // Adjusted to include space for labels
let svg, yScale, barWidth;

// Initialize D3 chart
function initD3Chart() {
  // Create SVG element
  svg = d3.select('.chart')
    .append('svg')
    .attr('width', svgWidth + margin.left + margin.right)
    .attr('height', svgHeight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  d3.csv('./data.csv').then(function (data) {
    const firstYear = data[0].year; // Assuming data is sorted and the first element has the earliest year

    // Filter data to only show the countries from the array
    let filteredData = data.filter(d => countries.includes(d.country) && d.year === firstYear);

    // Determine the min and max Y values for the scale from minMaxY
    const minY = 0; // Assuming 0 is the minimum value for the y-axis
    const maxY = minMaxY[0][firstYear]; // Extract the max value for the year

    // Create a y-scale
    yScale = d3.scaleLinear()
      .domain([minY, maxY])
      .range([svgHeight, 0]); // Invert range to correctly display SVG

    barWidth = svgWidth / filteredData.length;

    // Plot the bars
    svg.selectAll('rect')
      .data(filteredData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (barWidth + barPadding))
      .attr('y', d => yScale(d.total_killed))
      .attr('height', d => svgHeight - yScale(d.total_killed))
      .attr('width', barWidth)
      .attr('fill', '#000')
      .attr('class', 'bar');

    // Add grid lines for the specified year
    gridLinesByYear[firstYear].forEach(value => {
      // Add grid line
      svg.append('line')
        .attr('x1', -5)
        .attr('x2', svgWidth + 38)
        .attr('y1', yScale(value))
        .attr('y2', yScale(value))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '2,2');

      const textWidth = 85; // Estimate the width based on your text length
      const textHeight = 20; // Adjust as needed

      // Add white background rect for the text label
      svg.append('rect')
        .attr('x', -margin.left)
        .attr('y', yScale(value) - textHeight / 2)
        .attr('width', textWidth)
        .attr('height', textHeight)
        .attr('fill', 'white');

      // Add label for the grid line with styling
      svg.append('text')
        .attr('x', -margin.left + 5) // Adjust x position to not overlap with the background
        .attr('y', yScale(value))
        .attr('dy', '0.35em') // Center text vertically
        .attr('text-anchor', 'start') // Align text to start at the x position
        .style('font-size', '1rem')
        .style('font-family', "'Roboto', sans-serif")
        .text(`${value} deaths`);
    });

    // Correctly position country labels
    svg.selectAll('.countryLabel')
      .data(filteredData).enter().append('text')
      .text(d => d.country)
      .attr('class', 'countryLabel')
      .attr('x', (d, i) => i * (barWidth + barPadding) + barWidth / 2) // Center label under each bar
      .attr('y', svgHeight - 10) // Position below the bars
      .attr('text-anchor', 'middle') // Center text
      .attr('fill', '#000')
      .style('font-size', '0.85rem') // Smaller font size
      // .style('font-weight', 'bold') // Bold font size
      .style('font-family', "'Roboto', sans-serif")
      .attr('dy', '2rem'); // Offset the text a bit down from the exact bottom

    // Add y-axis to the chart
    svg.append("g")
      .call(d3.axisLeft(yScale));
  }).catch(function (error) {
    console.log(error);
  });
}

// After loading the data and setting up the initial chart:
function updateChartForYear(year) {
  d3.csv('./data.csv').then(function (data) {
    // Filter data to only show the countries from the array
    let filteredData = data.filter(d => countries.includes(d.country) && parseInt(d.year, 10) === year);

    // Check if filteredData is empty or not structured correctly
    if (!filteredData.length || !filteredData.every(d => 'country' in d)) {
      console.warn('Filtered data is empty or missing expected properties');
      return; // Exit the function to avoid further errors
    }

    // Update the domain of yScale based on new data
    const minY = 0; // Assuming 0 is the minimum value for the y-axis
    // Assuming the structure of minMaxY has been changed
    // Find the max Y value for the given year
    const maxYObject = minMaxY.find(obj => obj[year] !== undefined);
    const maxY = maxYObject ? maxYObject[year] : 50; // Default to 50 if year is not found

    // Update yScale domain based on the current year's data
    yScale.domain([0, maxY]);

    // Clear existing bars and grid lines
    // svg.selectAll('.bar').remove();
    svg.selectAll('.gridLine').remove(); // Remove existing grid lines
    svg.selectAll('.gridLabel').remove(); // Remove existing grid labels

    // Create a y-scale
    yScale = d3.scaleLinear()
      .domain([minY, maxY])
      .range([svgHeight, 0]); // Invert range to correctly display SVG

    // Bind filteredData to the bars
    var bars = svg.selectAll('.bar')
      .data(filteredData, d => d.country);

    // Enter selection - Append new rects for new data
    bars.enter().append('rect')
      .merge(bars) // Merge enter and update selections
      .attr('x', (d, i) => i * (barWidth + barPadding))
      .attr('y', d => yScale(+d.total_killed))
      .attr('height', d => svgHeight - yScale(parseInt(d.total_killed)))
      .attr('width', barWidth)
      .attr('fill', '#007bff');

    // Exit selection - Remove any surplus rects
    bars.exit().remove();
  }).catch(function (error) {
    console.error('Error loading or processing data:', error);
  });
}

// Update chart on scroll
window.addEventListener('scroll', function () {
  // Get sizes and positions
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = window.scrollY / scrollableHeight;

  // Get progressIndicator element
  const progressIndicator = document.querySelector('.progress-indicator');

  // Update chart data
  const totalYears = 2023 - 2000 + 1;
  const currentYearIndex = Math.min(Math.floor(scrollProgress * totalYears), totalYears - 1);
  const currentYear = 2000 + currentYearIndex;

  // Update progress indicator
  progressIndicator.textContent = (currentYear);

  updateChartForYear(currentYear);
});