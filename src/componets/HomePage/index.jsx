import React from 'react'
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreateIcon from '@material-ui/icons/Create';
import RoomIcon from '@material-ui/icons/Room';
import WorkIcon from '@material-ui/icons/Work';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../../styles/homepage.css'
import bg from '../../img/bg.jpg'
import intez from '../../img/intez.jpeg'
import sec from '../../img/sec.jpg'
import th from '../../img/th.jpg'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
const HomePage = () => {
  return (
    <div className="home">
      <div className="homepage_container">
        <div className="homepage_content">
          <div className="heading1">Computer Engineering</div>
          <div className="heading2">142,765 Computer Engineers follow this</div>
        </div>
      </div>
      <div className="middlepage">
        <div className="middle_top">
          <div className="topleft">
            <div className="allpost">All Posts(365)</div>
            <div className="article">Article</div>
            <div className="article">Events</div>
            <div className="article">Education</div>
            <div className="article">Job</div>
          </div>
          <hr />
          <div className="topright">
            <Button endIcon={<ArrowDropDownIcon />} className='btn_1'>Join Group</Button>
            <Button startIcon={<GroupIcon />} className='btn_2'>Join Group</Button>
          </div>
        </div>
      </div>

      <div className="midlepage_sec">
        <div className="middlepage_container">
          {/* section one */}
          <div className="middleleft">
            <div className="section_one_container">
              <div className="middlelef_1">
                <img src={bg} alt="" className='middlelef_1_img' />
              </div>
              <div className="middlelef_2">Article</div>
              <div className="middlelef_3">
                <div className='heading_3_content'>What if famous brands had regular fonts? Meet RegulaBrand!</div>
                <div className="icon"><MoreHorizIcon /></div>
              </div>
              <span className="small_paragraph">I've worked in UX for the better part of a decade.From now on , I plan re..</span>
              <div className="image_container">
                <div className="left_image">
                  <img src={intez} alt="" className='left_images' />
                  <div className="image_name">Sathak Kamra</div>
                </div>
                <div className="right_icons">
                  <div className="right_icon"><VisibilityIcon className='visible_ico' />1.4k views</div>
                  <div ><ShareIcon className="right_icon_2" /></div>
                </div>
              </div>
            </div>
          </div>
          {/*   section second*/}

          <div className="middleleft_section_2">
            <div className="section_sec_container">
              <div className="middlelef_1">
                <img src={sec} alt="" className='middlelef_1_img' />
              </div>
              <div className="middlelef_2">Article</div>
              <div className="middlelef_3">
                <div className='heading_3_content'>Tax Benifits for Investiment under National Pension Scheme launched by Goverment!</div>
                <div className="icon"><MoreHorizIcon /></div>
              </div>
              <span className="small_paragraph">I've worked in UX for the better part of a decade.From now on , I plan re..</span>
              <div className="image_container">
                <div className="left_image">
                  <img src={intez} alt="" className='left_images' />
                  <div className="image_name">Sarah West</div>
                </div>
                <div className="right_icons">
                  <div className="right_icon"><VisibilityIcon className='visible_ico' />1.4k views</div>
                  <div ><ShareIcon className="right_icon_2" /></div>
                </div>
              </div>
            </div>
          </div>
          {/*   Section Three*/}
          <div className="middleleft_three">
            <div className="section_thrd_container">
              <div className="middlelef_1">
                <img src={th} alt="" className='middlelef_1_img' />
              </div>
              <div className="middlelef_2">Meetup</div>
              <div className="middlelef_3">
                <div className='heading_3_content'>Finance & Investiment Elite Social Mixer @Lujiazui</div>
                <div className="icon"><MoreHorizIcon /></div>
              </div>
              <div className="claender">
                <div className="calender_left">
                  <div className="icon"><CalendarTodayIcon className='cal_ico' /></div>
                  <div className="cale_date">fri, 12 Oct, 2018</div>
                </div>
                <div className="calender_right">
                  <div className="locat_icon"><RoomIcon /></div>
                  <div className="locat_area">Ahamedabas, India</div>
                </div>
              </div>
              <div className="div_input"><button className='div_input_btn'>Visit Website</button></div>
              <div className="image_container">
                <div className="left_image">
                  <img src={intez} alt="" className='left_images' />
                  <div className="image_name">Sarah West</div>
                </div>
                <div className="right_icons">
                  <div className="right_icon"><VisibilityIcon className='visible_ico' />1.4k views</div>
                  <div ><ShareIcon className="right_icon_2" /></div>
                </div>
              </div>
            </div>
          </div>
          {/* fouth section */}
          <div className="middleleft_fourth_section">
            <div className="section_sec_container">
              <div className="div_section">
                <div className="div_one"><WorkIcon className='job_ico' />Job</div>
                <div className="div_two">
                  <div className="heading_software_developer">Sostware Develpoer</div>
                  <div className="div_two_ico"><MoreHorizIcon /></div>
                </div>
                <div className="div_three">
                  <div className="div_three_left"><CalendarTodayIcon className='divthreeleft_ico' />Innovaccer Analustics Privite Ltd.</div>
                  <div className="div_three_right"><WorkIcon />Noida,India</div>
                </div>
                <div className="div_three_input"><button className='div_three_input_btn'>Apply on TimesJob</button></div>
                <div className="three_image_container">
                  <div className="left_image">
                    <img src={intez} alt="" className='left_images' />
                    <div className="image_name">Sathak Kamra</div>
                  </div>
                  <div className="right_icons">
                    <div className="right_icon"><VisibilityIcon className='visible_ico' />1.4k views</div>
                    <div ><ShareIcon className="right_icon_2" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle_page_right">
          <div className="right_top_container">
            <div className="top_right_left">
              <div className="icon"><RoomIcon /> Noida, India</div>
              <div className="top_right_right"><CreateIcon /></div>
            </div>
          <div className="location_paragraph">
            <span className='locat_paragraphs'><HelpOutlineIcon className='help_icon' />Your Location will help us serve better and extand a personalised expriences.</span>
          </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default HomePage