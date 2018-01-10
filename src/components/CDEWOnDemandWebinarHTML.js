import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

export default class CCEDOnDemandWebinarHTML extends React.Component{
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
        title = 'To Be Updated', 
        dates = 'Dates to Be Updated', 
        link, 
        description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        lo1, lo2, lo3, imgLink,  
        presenter = '', 
        provider = '', 
        supporter = '', 
        cost = '', 
        credits = '', 
        tvLink, 
        tagline = '', 
        disclosure, unsubscribe, emailName =''
    } = this.props.info[this.props.info.selected_template];
        
    let {month, year} = this.props.info;
    if(month < 10 && month > 0){month = '0' + '' + month;}
    //Take the Lyris Name and make a url slug out of it.
    let slug = emailName.toString()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/--+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    
    let url = `http://aegispublications.com/news/cdeworld/${year}/${month}/${slug}.html`;
        let image = 'http://placehold.it/250x200';
        if(imgLink){image = imgLink.trim()}
        let html = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        
        <title>Now On Demand</title>
        </head>
        
        <body bgcolor="#fff">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica','Arial',sans-serif; background-color:#ffffff; max-width:600px;">
            <tbody>
            <tr>
                <td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333;">
                Cannot view this email? 
                    <a href="${url}" target="_blank" style="text-decoration:none; color:#005fae;">
                        Click here to view the HTML version.
                    </a>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody><tr>
                          <td height="39" colspan="2" align="center" valign="top" id="cover2"><a href="http://www.cdeworld.com" target="_blank">
        <img src="http://www.aegispublications.com/news/cdeworld/09/images/header1.jpg" width="659" height="98" hspace="0" vspace="0" border="0" align="left"></a></td>
                      </tr>
                      <tr>
                    </tr></tbody></table>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table width="590" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e4e4e4;margin:0 32px 20px 32px">
                        <tbody><tr>
                            <td style="padding:31px 0 21px 0; font-family:'Times New Roman',serif;font-size:28px; font-style:italic; color:#005fae;">Free On-Demand CE Webinar</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            
            <tr>
                <td colspan="2" valign="top" style="padding:12px 32px 24px 32px;font-size:13px;color:#005fae;line-height:16px">
                    <table cellpadding="0" cellspacing="0" border="0" align="right" style="padding:0 0 30px 0">
                    <tbody><tr>
                        <td bgcolor="#ffffff" style="border-collapse:collapse;padding:0 14px 4px 0"></td>
                      <td align="right" valign="top">
                        <a href="${link}" target="_blank"><img src="${imgLink}" alt="" width="270"></a><br>
                        </td>
                    </tr>
                </tbody></table>	
                    <div style="font-size:18px; color:#2469aa; line-height:20px; font-weight:bold; width:300px;"><a href="${link}" target="_blank" style="color:#2469aa; text-decoration:none;">
        ${title}</a></div>
                
                    
                    <a href="${link}" target="_blank" style="text-transform:uppercase; font-size:16px; background:#2469aa; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center;margin-bottom:18px; margin:14px 0 14px 0; text-decoration:none;">VIEW THE WEBINAR</a>
                    <strong>Presenter: </strong>${presenter}<br />			
                    <strong>Provider: </strong>${provider}<br>
                    <strong>Commercial Supporter: </strong><em>${supporter}</em><br>
                    <strong>CDE Credits: </strong>${credits} | <strong>Cost:</strong> ${cost}<br>
                    <br>
                    <strong>Description</strong><br>
                    <div style="margin:5px 0 0 0">${description}</div>		
                    <br>
                    <strong>Learning Objectives</strong>
                    <ul style="margin:5px 0 0 0;padding-left:1.3em">
                        <li>${lo1}</li>
                        <li>${lo2}</li>
                        <li>${lo3}</li>
                    </ul>
                    <strong><br>
                    Disclosures</strong><br>
                    <div style="margin:5px 0 0 0">${disclosure}
        
        </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <img src="http://cdeworld.com/media/3742" width="600" style="padding-top:15px" class="CToWUd">
                </td>
            </tr>
            <tr>
            <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
              
              <br>
              You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666; text-decoration:none;">AEGIS Dental Network</a> | CDEWorld.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" target="_blank" style="color:#666; text-decoration:none;">reply-207852@news.aegispublications.com</a> to your address book<br />
              ${unsubscribe}<br />
             CDEWorld an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a></td>
            </tr>
          </tbody>
        </table>
        </body>
        </html>
        `
//Text Email        
let textEmail = `CDEWorld On-Demand Webinar

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
        )
    }
}





