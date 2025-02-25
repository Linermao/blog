

interface Props{
  isLink: boolean;
  link: string;
  ico: string;
}

function IconButton({ isLink, link, ico }: Props){

  return(
    <>
      {isLink 
        ? 
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={ico} alt="icon" />
        </a>
        :
        <img src={ico} alt="icon" />
      }
    </>
  )
}

export default IconButton;