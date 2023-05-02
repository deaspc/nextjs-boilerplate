import Addimg from "../components/Addimg.js";

function Post() {
  return (
    <div>
      <div class="addimg-row">
        <a>
          <Addimg imageURL="/img/add.svg" title="Add image" cover="(cover)" />
        </a>
        <a>
          <Addimg imageURL="/img/add.svg" title="Add image" cover="(cover)" />
        </a>
      </div>
    </div>
  );
}

export default Post;
