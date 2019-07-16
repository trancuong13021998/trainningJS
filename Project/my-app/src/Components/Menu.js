import React, { Component } from 'react';
import  { Link ,Route } from 'react';

const menus =[
    {
    	name :'Trang Chủ',
    	to : '/',
    	exact : true
    },
    {
    	name :'Giới Thiệu',
    	to : '/About',
    	exact : false
    },
    {
    	name :'Liên Hệ',
    	to : '/Contact',
    	exact : false
    },

];
class Menu extends React.Component {

    render() {
        return (
            <div className="container-fluid">
	            <ul className="nav navbar-nav">
	                {this.showMenus(menus)}                                         
	            </ul>
	        </div>        
        );
    }
    showMenus = (menus) => {
    	var result = null;
    	if(menus.length > 0){
    		result =menus.map((menu,index) => {
    			return(
    				<Link 
	    			key={index} 
	    			to={menu.to}
	    			name={menu.name}/>
    			)
    		});
    	}
    	return result;
    }
}
export default Menu;