import React from "react";
import "./styles.css";

export default function Home() {

  return (
    
    <div class="container">
  <div class="all flex-row">
    <div class="menu flex-column">
      <div class="flex-row label-wrapper">
        <img src="https://i.ibb.co/crgCrWT/instagram.png" />
        <h3 class="insta-writing">Instagram</h3>
      </div>

      <div class="profil-info">


        <div class="menu-elements">
          <div class="icons">
            <img src="https://i.ibb.co/y8wD2HZ/explore-tool.png" />
            <div class="exp-writing"> Explore</div>
          </div>

          <div class="icons">
            <img src="https://i.ibb.co/tsDcKD1/hashtag.png" />
            <div class="trend-writing"> Trending Tags</div>
          </div>

          <div class="icons">
            <img src="https://i.ibb.co/XDnYxL9/user-symbol-of-thin-outline.png" />
            <div class="people-writing"> People </div>
          </div>

          <div class="icons">
            <img src="https://i.ibb.co/dWcct0k/notification.png" />
            <div class="notif-writing"> Notification </div>
          </div>

          <div class="icons">
            <img src="https://i.ibb.co/rQcCQcL/direction.png" />
            <div class="direct-writing"> Direct </div>
          </div>

          <div class="icons">
            <img src="https://i.ibb.co/smVnQkg/settings.png" />
            <div class="set-writing"> Settings</div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="right-page">
    <div class="top-bar">
      <div class="form has-search">
        <input class="text" type="search" placeholder="Search" name="search" />
        <span class="searchIcon">
         <img src="https://i.ibb.co/sqFgRq8/search.png" />
       </span>
        <span class="micro">
         <img src="https://i.ibb.co/HNx8Xty/microphone.png"/>
       </span>
      </div>
      <div class="cover-post">
        <button class="button post-new">Create New Post</button>
        <span class="plus">
       <img src="https://i.ibb.co/0YG23j8/plus-symbol.png" />
       </span>
      </div>
      <div class="mail-heart">
        <div class="icon1">
          <img src="https://i.ibb.co/6ZwMVGp/email.png" />
        </div>
        <div class="icon1">
          <img src="https://i.ibb.co/K91ZTyF/heart.png" />
        </div>
        <div class="person-radius">
          <img src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        </div>
      </div>
    </div>
        
     <div class="featured">
                    <div class="featured-header">
                        <h2 class="featured-stories"> Latest Feed</h2>
                      <div class="icon-two">
                  <div class="icon3">
        </div>
                      </div>
                    </div>

        <div class="last-body">
                        <div class="galery-wrapper">
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1505158498176-0150297fbd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                        </div>
                    </div>
                </div>   
      </div>
      
            </div>


  
        
       

  );
}