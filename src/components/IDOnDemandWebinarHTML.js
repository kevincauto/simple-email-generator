import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

export default class IDOnDemandWebinarHTML extends React.Component {
    downloadHtml(html, fileName){
        if(!fileName){
          alert("This email needs a name in order to be downloaded.");
          return;
        };
        var file = new File([html], fileName + '.html', {type: "text/html"});
        saveAs(file);
    }
    
    downloadText(textEmail,fileName){
        if(!fileName){
          alert("This email needs a name in order to be downloaded.");
          return;
        };
        var file = new File([textEmail], fileName + '.txt', {type: "text/plain;charset=utf-8"});
        saveAs(file);
    }   
    
    render(){
    const {
        emailName = '',
            title, dates, provider, supporter, cost, credits, 
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            lo1, lo2, lo3, presenter, link, tvLink, unsubscribe, disclosure, imgLink
        } = this.props.info[this.props.info.selected_template]

    let {month, year} = this.props.info;
    if(month < 10 && month > 0){month = '0' + '' + month;}
    //Take the Lyris Name and make a url slug out of it.
    let slug = emailName.toString()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/--+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    

    let url = `http://aegispublications.com/news/id/${year}/${month}/${slug}.html`;
        let image2 = 'http://placehold.it/200x150';
        if(imgLink){image2 = imgLink.trim()}
        
        let start = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>
                On-Demand Inside Dentistry Webinar
            </title>
        </head>
        
        <body bgcolor="#bfbfbf">
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#ffffff" style="font-family:'Helvetica', 'Arial', sans-serif;">
        <tr>
            <td colspan="2" style="font-size:10px; line-height:20px; text-transform:uppercase; text-align:center; color:#83878c;">
            Cannot view this email? 
                <a href="${url}" target="_blank" style="text-decoration:none; color:#83878c;">
                    Click here to view the HTML version.
                </a>
            </td>
        </tr>
        
        <tr>
            <td colspan="2">
                <a href="http://www.dentalaegis.com/id" target="_blank">
                    <img src="http://aegispublications.com/news/id/webinars/2016/images/webinar-email-header-id.jpg" width="600" />
                </a>
            </td>
        </tr>
        
        <tr>
            <td width="280" style="padding:12px; font-family:'Times New Roman', serif; font-size:26px; font-style:italic; color:#ad112b;">
                New On-Demand Webinar
            </td>
            <!-- Social Media Map -->
            <td width="220">
                <img src="http://www.aegispublications.com/news/ce/2011/1011/drbenjamin/images/social.gif" width="95" height="27" align="right" usemap="#Map" />
            </td>
            <!-- /Social Media Map -->
        </tr>
        
        <tr>
            <td valign="top" style="padding:12px;">
                <span style="font-size:16px; line-height:20px; color:#c2904a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#ad112b; margin-bottom:5px;">
        
         
         
         <strong>${title}</strong>
                
                <div style="font-size:11px; line-height:15px; clear:both; margin:9px 0 0 0;">
                    <div style="color:#ad112b;"><strong>PRESENTER: </strong>
                        <span style="color:#333333;"> ${presenter}</span>
                    </div> 
                    <div style="color:#ad112b; clear:both;"><strong>CDE CREDITS:</strong> 
                        <span style="color:#333333;"> ${credits}</span> 
                    </div>
                    <div style="color:#ad112b; clear:both;"><strong>COST:</strong> 
                        <span style="color:#333333;"> ${cost}</span>
                    </div>
                    <div style="color:#ad112b; clear:both;"><strong>COMMERCIAL SUPPORTER: </strong>
                        <span style="color:#333333;"><em> ${supporter}</em></span>
                    </div>
                <div style="color:#ad112b; clear:both;"><strong>PROVIDER: </strong>
                        <span style="color:#333333;"><em> ${provider}</em></span>
                    </div>
                       <div style="color:#ad112b; clear:both; margin:0 0 7px 0;"><strong>AVAILABLE: </strong>
                        <span style="color:#333333;"><em> ${dates}</em></span>
                    </div> 
                </div>
         
         
         
        <span style="font-size:17px; line-height:auto; color:#63246a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#005fae; margin-bottom:5px;"><a href="${link}" target="_blank" ><img src="http://aegispublications.com/news/id/webinars/2016/05/click.jpg" alt="Click to View Webinar" width="302" border="0" style="margin:7px 0 0 0;" /></a></span></span>
        
        
        
            </td>
            
            <!-- Presenter's Photo -->
            <td valign="top" align="center" style="padding:12px;">
                <img src="${image2}" width="220"  />
            </td>
            <!-- /Presenter's Photo -->
        </tr>
        <tr>
            <td valign="top" style="padding:0px 12px 12px 12px;" colspan="2">
                            <div style="font-size:11px; line-height:15px; clear:both; margin:0px 0 0 0;">
                    <div style="color:#ad112b;"><strong>DESCRIPTION:</strong>
                        <span style="color:#333333;"><br />
                       ${description}
        </span>
                    </div>
        
                
                    <div style="color:#ad112b; margin: 7px 0px 0px"><strong>LEARNING OBJECTIVES:</strong>
                        <span style="color:#333333;"><br />
                        <ul style="margin: 0px; padding: 0px 0px 0px 15px">
                            <li>${lo1}</li>
                            <li>${lo2}</li>
                            <li>${lo3}</li>
                        </ul>
                        </span>
                    </div>
                                <div style="color:#ad112b; margin: 7px 0px 0px 0px"><strong>DISCLOSURE:</strong>
                        <span style="color:#333333;"><br />
                        ${disclosure}
        </span>
                    </div>
                    </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <hr size="1" color="#dedede" width="575" />
            </td>
        </tr>
        
        <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
        
        <tr>
        <td align="center" colspan="2" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
          
          <br>
          You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dentistry</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" target="_blank" style="color:#666; text-decoration:none;">reply-207852@news.aegispublications.com</a> to your address book<br />
          ${unsubscribe}<br />
         <em>Inside Dentistry</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a></td>
        </tr>
        <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
        </table>
        <map name="Map" id="Map">
            <area shape="rect" coords="4,5,21,22" href="http://www.facebook.com/share.php?u=${url}&amp;title=CDE Webinar" target="_blank" alt="fb">
            <area shape="rect" coords="30,3,50,21" href="http://twitter.com/home?status=Live CDE Webinar+${url}" target="_blank" alt="twitter">
            <area shape="rect" coords="58,3,83,23" href="mailto:?subject=FW: Live CDE Webinar&amp;body=I thought you might be interested in this: ${url}" target="_blank" alt="mailto">
        </map>
        </body>
        </html>
        `;

//Text Email        
let textEmail = `Inside Dentistry On-Demand Webinar

${title}       
${link}

Presenter: ${presenter}
Dates: ${dates}
Provider: ${provider}
Commercial Supporter: ${supporter}
Cost: ${cost}
CDE Credits: ${credits}

Description:
${description}

Learning Objectives
${lo1}
${lo2}
${lo3}

${disclosure ? `Disclosure:\n${disclosure}` : ``}     

${link}
`;  

        let html = start;    
        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);


        return(
            <div >
            <div className="content" dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
            <br />
            <h3 className="download-header">3. Copy or download the email.</h3>
            <div className="copy-paste">
              <div className="copyArea html-copy">
                <textarea value={html} readOnly={true}  />
                <button onClick={()=>this.downloadHtml(html,slug)} className="download-button">Download HTML Email</button>
              </div>
              <div className="copyArea text-copy">
                <textarea value={textEmail} readOnly={true}/>
                <button onClick={()=>this.downloadText(textEmail,slug)} className="download-button">Download Text-Version Email</button>
              </div>
            </div>
          </div>
        );
    }
}