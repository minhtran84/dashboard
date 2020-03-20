import React from 'react';
import '../styles/navigation.css';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-md navigation-clean" className="navbar">
                <div class="container"><a class="navbar-brand" href="#" className="navbar_brand">Trung tâm Phục vụ hành chính công tỉnh Sóc Trăng</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div
                        class="collapse navbar-collapse" id="navcol-1">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item" role="presentation"><a class="nav-link active" href="#">First Item</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Second Item</a></li>
                            <li class="nav-item" role="presentation"></li>
                            <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;