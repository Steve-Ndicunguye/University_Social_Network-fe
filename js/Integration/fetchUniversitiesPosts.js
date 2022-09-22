//Fetch posts

async function fetchEventsPosts(){
        
    let response = await fetch("http://localhost:5000/getPostsByCategory/Universities")
    
    const allPosts = await response.json(); 
    const posts = allPosts.fetchedPost;
    console.log(posts);
   
    for(let i=0;i<posts.length;i++){
        let universities = document.getElementById("Cars");

        let postsArray = posts[i];

        //date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let title = postsArray.title;
        let postImage   = postsArray.imgLink;
        let date = today;
        let authorName = postsArray.authorName;
        let authorImage = postsArray.authorImage;
        
      if(1>0) {
    
    let postId =await postsArray._id ;

        let postTemplate = `
 
        <div class="box boxOpportunity" id="${postId}" onclick="getSinglePost('${postId}')">
            <div class="box-img">
                <img src="${postImage}" class="img" alt="" title="" >
                
            </div>
            <div class="box-heading1">
                ${title}
                <div class="box-heading2">
                <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;  ${date}
                </div>
            </div>
            
            <div class="box-radius">
                <img src="${authorImage}" class="img" alt="" title="" >
                
            </div>
            <div class="box-heading3">
                By ${authorName} <i class="fa pull-right fa-heart-o" aria-hidden="true"></i>
            </div>
        </div>
       
        `
        universities.innerHTML += postTemplate;
    
    }
    
        }
    }

fetchEventsPosts();