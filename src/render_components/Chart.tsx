function Chart() {
  return (
    <svg width="8000" height="3000">
      <Bar xOffset={20} />
      <Bar xOffset={40} />
      <Bar xOffset={60} />
      <Bar xOffset={80} />
    </svg>
  );
}

function Bar(props: {xOffset: number}) {
  return (
    <g className="bar">
      <rect y={2} x={props.xOffset} width={10} height={50} fill={"#009"} />
    </g>
  );
}

export default Chart;
