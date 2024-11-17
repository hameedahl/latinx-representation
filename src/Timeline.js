import React from "react";
import { Link } from 'react-router-dom';
import { shows } from './informationObj.js';

const Timeline = () => {
  const svgWidth = 1100;
  const svgHeight = 370;
  const pointRadius = 9;
  const spacing = svgWidth / (shows.length - 1);
  const lineLength = 50;

  return (
    <div id="timeline">
      <svg width={svgWidth} height={svgHeight}>
        {/* Title */}
        <text
          x={svgWidth / 2}
          y={35} 
          textAnchor="middle"
          fontSize={45}
          fontWeight="bold"
          fill="#DB4377"
          fontStyle={"italic"}
        >
        Sitcom Timeline
        </text>

        {/* Horizontal Line */}
        <line
          x1={spacing / 2}
          y1={svgHeight / 2}
          x2={svgWidth - spacing / 2}
          y2={svgHeight / 2}
          stroke="#612D7C"
          strokeWidth={8}
        />

        {/* Timeline Points */}
        {shows.map((point, index) => {
          const x = spacing / 2 + index * spacing;
          const y = svgHeight / 2;
          const isUp = index % 2 === 0;

          return (
            <g key={point.id}>
              <circle cx={x} cy={y} r={pointRadius} fill="#ff6a00"/>
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={isUp ? y - lineLength : y + lineLength}
                stroke="#ff6a00"
                strokeWidth={5}
              />
              {/* Anchor show */}
              <Link className="link" to={`/show-information/${point.link}`}>
                <text
                  x={x}
                  y={isUp ? y - lineLength - 40 : y + lineLength + 30}
                  textAnchor="middle"
                  fontSize={30}
                  fill="#f4e544"
                  style={{ cursor: "pointer"}}
                  fontWeight={"bold"}
                  className="yearlink"
                >
                  {point.year}
                </text>
                <text
                  x={x}
                  y={isUp ? y - lineLength - 10 : y + lineLength + 60}
                  textAnchor="middle"
                  fontSize={18}
                  fill="#fff"
                  fontStyle={"italic"}
                  className="showlink"

                >
                  {point.show}
                </text>
              </Link>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Timeline;
