import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CalendarHeatmap from 'react-calendar-heatmap'
import Grid from '@material-ui/core/Grid';

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
  startDate.setMonth(startDate.getMonth() - 6)
  return <Grid container justify="center">
    <Grid item xs={12} sm={6} md={4}>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={heatmap}
        showWeekdayLabels={true}
        gutterSize={2}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
      />
    </Grid>
  </Grid>
}

export default LearningCalendar

