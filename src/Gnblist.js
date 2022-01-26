import React,{ Component} from "react";
class Gnblist extends Component{
    constructor(props){
        super(props);
        this.state = {
            manuDB : [
                {d1text : '브랜드소개',
                d1link : '#',
                d1Class : '#d1',
                d2DB : [ 
                    {d2text :'인사말',
                    d2link : '#',
                    d2Class : '',}]
                },
                {d1text : '제품소개',
                d1link : '#',
                d1Class : 'd1',
                d2DB : [ 
                    {d2text :'사용법',
                    d2link : '#',
                    d2Class : '',}]
                },
                {d1text : '이벤트',
                d1link : '#',
                d1Class : 'd1',
                d2DB : [ 
                    {d2text :'이벤트1',
                    d2link : '#',
                    d2Class : ''},
                    {d2text :'이벤트2',
                    d2link : '#',
                    d2Class : ''},
                    {d2text :'이벤트3',
                    d2link : '#',
                    d2Class : ''}]
                },
                {d1text : '리뷰',
                d1link : '#',
                d1Class : 'd1',
                d2DB : [ 
                    {d2text :'베스트리뷰',
                    d2link : '#',
                    d2Class : ''},
                    {d2text :'전체리뷰',
                    d2link : '#',
                    d2Class : ''}]
                },
                {d1text : '고객서비스',
                d1link : '#',
                d1Class : 'd1',
                d2DB : [ 
                    {d2text :'FAQ',
                    d2link : '#',
                    d2Class : ''},
                    {d2text :'Contact',
                    d2link : '#',
                    d2Class : ''}]
                },

            
            ]}
         
    }
    render(){
    
        return(
            <>
             {this.state.manuDB.map((listdb) => {
                 return <li className={listdb.d1Class}>
                     <a href={listdb.d1link} className="text-dark"> {listdb.d1text} 
                     </a>
                <ul className="d2">
                    {listdb.d2DB.map((d2listdb) => {
                        return <li className={d2listdb.d2Class}>
                            <a href={d2listdb.d2link} className="text-dark"> {d2listdb.d2text }</a>
                        </li>
                    }
                    )}
                </ul>
            </li>
              })}  
                
            </>
        )
    }
    
}

export default Gnblist;