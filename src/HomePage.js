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
      <div class="profil-img"></div>
      <div class="profil-info">
        <h2 class="name">AdresGezgini</h2>
        <h3 class="city">Izmir, Turkey</h3>
        <div class="numbers">
          <div class="post">
            <p>Post</p>
            <div class="post-num">116</div>
          </div>
          <div class="post">
            <p>Followers</p>
            <div class="post-num">48m</div>
          </div>
          <div class="post">
            <p>Following</p>
            <div class="post-num">48m</div>
          </div>
        </div>
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
    <hr class="hr-new"></hr>
    <div class="right-of-page">
      <div class="right-middle">
        <div class="featured">
                    <div class="featured-header">
                        <h2 class="featured-stories"> Featured Stories</h2>
                        <button class="button popular-stor"> Popular Stories</button>
                    </div>
                    <div class="featured-body">
                        <div class="galery-wrapper">
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1562447279-69402cb4587d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                          <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                        </div>
                    </div>
                </div>
        
     <div class="featured">
                    <div class="featured-header">
                        <h2 class="featured-stories"> Latest Feed</h2>
                      <div class="icon-two">
                  <div class="icon3">
          <img src="https://i.ibb.co/Jd2NwHV/menu-lines.png" />
        </div>
        <div class="icon3">
          <img src="https://i.ibb.co/tZdq3jg/four-boxes.png" />
        </div>
                      </div>
                    </div>
                    <div class="featured-body">
                        <div class="galery-wrapper">
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                            </div>
   
                          <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
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
                           <div class="loader"></div>
                </div>   
      </div>
      <div class="last-right">
        <img src="https://adresgezgini.com/themes/2018/images/medya/AG-logo-BeyazZemin-Dikey.png" />
        <h2 class="name2">AdresGezgini</h2>
        <div class="follows"> 
         <div class="post">
            <p>Photos</p>
            <div class="post-num">882</div>
          </div>
          <div class="post">
            <p>Followers</p>
            <div class="post-num">527k</div>
          </div> 
        </div>
        <div class="read-me">
          AdresGezgini ...

          ...
        </div>
        
          <div class="feature"> 
         <div class="post2">
            <p>Locations</p>
            <div class="post-num">Based in Turkey</div>
          </div>
          <div class="post2">
            <p>Profession</p>
            <div class="post-num">Yazılım-ArGe-Reklam Şirketi</div>
          </div>
             <div class="post2">
            <p>Profession</p>
            <div class="post-num">AdresGezgini</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
       

  );
}