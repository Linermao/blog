import { s_postCard } from "../../../utils/styles/Blog";
import { useNavigate } from "react-router-dom";
import { t_articleType } from "../../../utils/type";

import Card from "../../Card";

interface Props{
	// loading: boolean;
	article: t_articleType
}

function DisplayBar({ article }: Props) {
	return (
		<>
      <div className="flex flex-col gap-4">
        <p className="text-2xl">{article.title}</p>
        <div className="flex gap-4">
          <p className="text-base">{article.date}</p>
          <p className="text-base">{article.date}</p>
          <p className="text-base">{article.date}</p>
        </div>
      </div>
		</>
	)
}

function PostCard({ article }: Props){
	const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center">
        <Card onClick={()=>navigate(`/Articles?id=${article.id}&title=${article.title}`)}>
          <DisplayBar article={article}/>
        </Card>
      </div>
    </>
  )
}

export default PostCard;