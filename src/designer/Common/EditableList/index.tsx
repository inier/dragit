import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import HoverItem from './HoverItem';
import { Fab, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    
    addArea:{
      display:'flex',
      justifyContent:'center',
      //padding:theme.spacing(1),
    }
  }),
);

export interface ItemMeta{
  id:number,
  title:string,
}

export default function EditableList(
  props:{
    items:ItemMeta[],
    onChange?:(newTitle:string, id:number)=>void
  }
) {
  const {items, onChange} = props;
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        {
          items.map(item=>{
            return(
              <HoverItem
                key={item.id}
                button
                selected={selectedIndex === item.id}
                onClick={(event:any) => handleListItemClick(event, item.id)}
                primary={item.title}
                onChange = {(newTitle:string)=>{onChange && onChange(newTitle, item.id)}}
              />              
            )
          })
        }
      </List>
      <div className={classes.addArea}>
        <Fab color="primary" size="small">
          <AddIcon />
        </Fab>
       </div>
    </div>
  );
}
