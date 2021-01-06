import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import MediaAdder from 'components/Medias/MediaAdder';
import { IMedia } from 'base/Model/IMedia';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex:1,
    },
    label:{
      padding:theme.spacing(1),
      fontSize:'1.1rem',
      color:theme.palette.text.primary,
    }

  }),
);

const MediaSelect = React.forwardRef((props: {
  name?:string,
  label?:string,
  value?:IMedia,
  width?:string,
  avatar?:boolean,
  isDeisgning?:boolean,
  onChange?:(event:any)=>void,
}, ref:any)=>{
  const {name, label, value, width, avatar, isDeisgning, onChange, ...rest} = props;
  const classes = useStyles();

  const [media, setMedia] = React.useState(value);

  useEffect(()=>{
    setMedia(value);
  }, [value])

  const handleSelectMedias = (medias:any)=>{
    const currentValue = medias && medias.length >0 ? medias[0] :undefined;
    setMedia( currentValue );
    onChange && onChange(
      {
        name:name,
        target:{
          value:currentValue,
        }
      }
    )
  }

  return (
    <div className={classes.root} ref = {ref} style={{width:width}} {...rest}>
      {label && <div className = {classes.label}>{label}</div>}
      {
        <MediaAdder 
          value={media ? [media] :[]} 
          onSelectMedias={handleSelectMedias} 
          single 
          avatar = {avatar}
          isDeisgning = {isDeisgning}
        />      
      }

    </div>
  )
})

export default MediaSelect
