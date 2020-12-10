import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:[{'a': 1}, {'b': 2}, {'c': 3}],
            filtered:'Enter your Search String',
        }
    }

    filterNews(userinput){
           this.state.news.map((data) => {
            let key;
            let output;
            for(key in data){
                if( key.toLowerCase().indexOf(userinput.toLowerCase())>-1){
                    output = data[key]
                    this.setState({filtered:output})
                }
            }
            console.log(output)  
        })
      
        /*const output =this.state.news.filter((data) =>{
          
        })*/
        //console.log(output)
        //this.setState({filtered:output})
    }


    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </React.Fragment>
        )
    }
}


export default Home;