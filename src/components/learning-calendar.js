import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CalendarHeatmap from 'react-calendar-heatmap'

const LearningCalendar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___date) {
          fieldValue
          nodes {
            frontmatter{
              learnings {
                title
              }
            }
          }
        }
      }
    }
  `)

  const heatmap = data.allMarkdownRemark.group.map(g => ({
    date: g.fieldValue,
    count: g.nodes.map(n => n.frontmatter.learnings.length).reduce((a,b)=>a+b, 0)
  }));
  const endDate = new Date(heatmap[heatmap.length - 1].date)
  const startDate = new Date(endDate)
  startDate.setFullYear(startDate.getFullYear() - 1)
  return <CalendarHeatmap
    startDate={startDate}
    endDate={endDate}
    values={heatmap}
    showWeekdayLabels={true}
    classForValue={(value) => {
      if (!value) {
        return 'color-empty';
      }
      return `color-github-${value.count}`;
    }}
  />
}

export default LearningCalendar

