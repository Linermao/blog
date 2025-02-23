import Card from "@/components/Card";
import IconButton from "@/components/IconButton";

import { d_accounts } from "@data/blog";
import { d_runTime } from "@data/site";

import { s_aside } from '@styles/Blog';

import avatar from '@/assets/avatar.jpg';

function BlogCard(){
  return (
    <>
      <Card className="h-[225px]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full"/>
          <p className={s_aside.title}>Linermao</p>
          <div className="flex gap-5 justify-center items-center py-2">
            {d_accounts.map((item, index)=>(
              <IconButton key={index} {...item} />
            ))}
          </div>
        </div>
        
      </Card>
    </>
  )
}

function DataCard(){
  return (
    <>
      <Card className="flex gap-5 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>文章</div>
          <div className={s_aside.number}>52</div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>分类</div>
          <div className={s_aside.number}>52</div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className={s_aside.title}>标签</div>
          <div className={s_aside.number}>52</div>
        </div>
      </Card>
    </>
  )
}

function SiteCard(){
  return(
    <>
      <Card className="flex gap-5 justify-center items-center">
        <p>{d_runTime}</p>
      </Card>
    </>
  )
}

function Aside(){
  return (
    <>
      <aside className="flex flex-col justify-center items-center w-[280px] gap-4">
        <BlogCard />   
        <DataCard />   
        <SiteCard />   
      </aside>
    </>
  )
}

export default Aside;