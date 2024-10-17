import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function SocialShare() {
  const shareUrl = window.location.href; // URL to be shared

  return (
    <div className="flex space-x-4">
      {/* Facebook Share */}
      <div className="bg-white p-2">
        <a href={shareUrl}>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </a>
      </div>

      {/* Twitter Share */}
      <div className="bg-white p-2">
        <a href={shareUrl}>
          <TwitterShareButton url={shareUrl}>
            <XIcon size={40} round={true} />
          </TwitterShareButton>
        </a>
      </div>

      {/* WhatsApp Share */}
      <div className="bg-white p-2">
        <a href={shareUrl}>
          <WhatsappShareButton url={shareUrl}>
            <WhatsAppIcon size={40} round={true} />
          </WhatsappShareButton>
        </a>
      </div>

      {/* LinkedIn Share */}
      <div className="bg-white p-2">
        <a href={shareUrl}>
          <LinkedinShareButton url={shareUrl}>
            <LinkedInIcon size={40} round={true} />
          </LinkedinShareButton>
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
