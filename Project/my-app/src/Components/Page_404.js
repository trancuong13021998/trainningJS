import React from 'react';
class Page_404 extends React.Component {
    render() {
        return (
            <div className="main">
			    <div className="container">
			        <div className="row margin-bottom-40">
			            <div className="col-md-12 col-sm-12">
			                <div className="content-page page-404">
			                    <div className="number">
			                        404
			                    </div>
			                    <div className="details">
			                        <h3>Oops! You're lost.</h3>
			                        <p>
			                            We can not find the page you're looking for.<br />
			                            <a href="index.html" className="link">Return home</a> or try the search bar below.
			                        </p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
}
export default Page_404;