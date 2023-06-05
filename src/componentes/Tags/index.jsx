
import style from './Tags.module.scss'
export default function Tags({tags, filtraFotos}) {  
  return (
    <div className={style.tags}>
      <p className={style.tags__p}>Filtre por tags:</p>
      <ul className={style.tags__lista}>
         {tags.map((tag) => {
          return <li key={tag} onClick={()=>filtraFotos(tag)}>{tag}</li>
         })}
      </ul>

    </div>
  )
}