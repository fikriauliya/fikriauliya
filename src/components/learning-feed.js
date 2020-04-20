import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { BookOutlined as ReadIcon,
  OndemandVideo as WatchIcon,
  PeopleOutline as CompeteIcon,
  KeyboardOutlined as CodeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.2),
  },
  comment: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

const LearningFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
                learnings {
                  title
                  tags
                  taskType
                  comment
                }
              }
              excerpt
            }
          }
        }
      }
  `)

  const classes = useStyles()

  const Icon = (taskType) => {
    const mapping = { "code": <CodeIcon/>, "read": <ReadIcon/>,
      "watch": <WatchIcon/>, "compete": <CompeteIcon/>}
    return mapping[taskType]
  }

  return <List className={classes.root} subheader={<li />}>
    <Grid container spacing={2}>
      {data.allMarkdownRemark.edges.map((edge) => (
        <Grid item xs={12} md={6}>
          <Paper variant="outlined">
            <ListSubheader disableSticky>
              {edge.node.frontmatter.date}
            </ListSubheader>
            {edge.node.frontmatter.learnings.map((learning) => (
              <ListItem key={`${learning.title}`}>
                <Grid container wrap="nowrap" spacing="2" alignItems="center">
                  <Grid item>
                    {Icon(learning.taskType)}
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <ListItemText primary={learning.title} />
                      </Grid>
                      {learning.comment && <Grid item>
                        <Typography component="div" variant="body2" className={classes.comment}>
                          <Box color="text.secondary">{learning.comment}</Box>
                        </Typography>
                      </Grid>}
                      <Grid item>
                        {learning.tags.map((tag) => (
                          <Chip size="small" className={classes.chip} label={tag} variant="outlined"/>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </List>
}

export default LearningFeed
