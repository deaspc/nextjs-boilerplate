import Posttopbar from "../components/Posttopbar.js";
import Addimg from "../components/Addimg.js";
import Name from "../components/Name.js";
import Description from "../components/Description.js";
import Tag from "../components/Tag.js";

function Post() {
  return (
    <div>
      <div className="db post_wrapper">
        <Posttopbar />
        <div className="addimg-row">
          <a>
            <Addimg
              imageURL1="/img/star.svg"
              imageURL2="/img/add.svg"
              title="Add image"
            />
          </a>
          <a>
            <Addimg
              imageURL1="/img/star.svg"
              imageURL2="/img/add.svg"
              title="Add image"
            />
          </a>
        </div>
        <Name />
        <Description />
        <div className="tags">Tags</div>
        <div className="your-card">Your card</div>
        <Tag />
        <div className="your-interested-card">Your interested card</div>
        <Tag />
      </div>
    </div>
  );
}

export default Post;
