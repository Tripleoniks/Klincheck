import {InlineReactionButtons} from 'sharethis-reactjs';
import {InlineShareButtons} from 'sharethis-reactjs';
import React, {Component} from 'react'


export class ShareButtons extends Component{
  constructor(props){
      super(props);

      var defaultNetworks =   ['facebook', 'twitter', 'pinterest', 'googleplus', 'sharethis',  'email'];

  this.state = {
      config: {
          id: this.props.id || 'sharethis-inline-buttons',
          networks: this.props.networks || defaultNetworks,
          alignment: this.props.alignment || "right",
          enabled: this.props.enabled !== 'false' || true,
          font_size: this.props.font_size || 11,
          padding: this.props.padding || 8,
          radius: this.props.radius || 20,
          networks: this.props.networks || defaultNetworks,
          size: this.props.size || 32,
          show_mobile_buttons: this.props.show_mobile_buttons !== 'false' || true,
          spacing: this.props.spacing || 2,
          url: this.props.url || window.location.href,
          title: this.props.title || document.title,
          image: this.props.image || "https://18955-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/ShareThisLogo2x.png", // useful for pinterest sharing buttons
          description: this.props.description || document.getElementsByTagName('meta')["description"].content,
          username: this.props.username || "ChadSteele" // custom @username for twitter sharing
      }
  };



  }



  render(){
      return <span id={this.state.config.id || 'sharethis-inline-buttons'}></span>
  }
}

export default ShareButtons;