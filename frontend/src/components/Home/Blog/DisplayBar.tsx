import { s_postCard } from "../../../utils/styles/Blog";
import { useNavigate } from "react-router-dom";
import { t_articleType } from "../../../utils/type";

function DisplayBarLoading(){
	return (
		<div className={s_postCard.displayBarLoading}>
		</div>
	)
}

interface Props{
	loading: boolean;
	article: t_articleType
}

function DisplayBar({ loading, article }: Props) {
	const navigate = useNavigate();
	return (
		<>
			<div className="flex justify-center items-center">
				{loading 
					? 
					<DisplayBarLoading /> 
					: 
					<div className="w-[80%]">
						<div className="h-[18px] w-full flex justify-center items-center bg-gray-600 p-20 overflow-hidden rounded-4xl cursor-pointer"
								 onClick={() => navigate(`/post?title=${article.title}`)}
						>
							<p className="text-white">{article.title}</p>
							<p className="text-white">{article.date}</p>
						</div>
					</div>
				}
			</div>
		</>
	)
}

export default DisplayBar;