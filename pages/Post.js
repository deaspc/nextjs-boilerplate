import Posttopbar from "../components/Posttopbar.js";
import Addimg from "../components/Addimg.js";
import Name from "../components/Name.js";
import Description from "../components/Description.js";

function Post() {
  return (
    <div className="Screen">
      <div className="db post_wrapper">
        <Posttopbar />
        <div class="addimg-row">
          <a>
            <Addimg imageURL="/img/add.svg" title="Add image" cover="(cover)" />
          </a>
          <a>
            <Addimg imageURL="/img/add.svg" title="Add image" cover="(cover)" />
          </a>
        </div>
        <Name />
        <Description />
      </div>
    </div>
  );
}

export default Post;
