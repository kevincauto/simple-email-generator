import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

export default class IDTLiveWebinarHTML extends React.Component {
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

    render() {
        const { lyrisName='', title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, tvLink, unsubscribe, disclosure, cta='View the Webinar', header='http://aegispublications.com/news/idt/2015/06/tomorrow.jpg' } = this.props.info[this.props.info.selected_template];
        
        let {month, year} = this.props.info;
        if(month < 10 && month > 0){month = '0' + '' + month;}
         //Take the Lyris Name and make a url slug out of it.
        let slug = lyrisName.toString()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w-]+/g, '')       // Remove all non-word chars
            .replace(/--+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    
        let url = `http://aegispublications.com/news/idt/${year}/${month}/${slug}.html`;
        let html = `<!doctype html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>IDT Webinars</title>
        </head>
        
        <body style="background-color:#EBEBEB">
        <center>
        <table width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;">
          <tbody>
            <tr>
              <td colspan="2" align="center" style="border-top:solid 1px #000000; border-bottom:solid 1px #000000;">
                  <div style="font-family:Arial, sans-serif; font-size:11px; color:#000000;">
                      Having trouble viewing this email? <a href="${url}" target="_blank" style="color:#db1f28; text-decoration:none; line-height:18px;">Click here.</a>
                </div>
              </td>
            </tr>
            <tr>
              <td valign="top"><img src="http://aegispublications.com/news/idt/2015/05/webinar-side.jpg" width="193" height="652" alt=""  style="border-top:#000000 solid 1px;"/></td>
              <td valign="top">
              <a href="${link}"><img src="${header}" width="407" height="156" alt=""/></a>
                <table width="394" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td width="424" valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; ">
                      
        
        <span style="font-family:Arial, sans-serif; font-size:18px; color:#424b52; text-align:left; line-height:auto; font-weight:bold;">${title}</span>
        <br>
        <strong><br>
        Presenter</strong>: ${presenter}<br>
        <strong>Provider: </strong> ${provider}<br>
        <strong>Commercial Supporter: </strong>: <em>${supporter}</em><br>
        <strong>CE Credits: </strong> ${credits}<br>
        <strong>Cost: </strong> ${cost}<br>
        <strong>Date and Time: </strong>: ${date}<br>
        <br>
        <strong>Description:</strong><br />
        ${description}<br /><br />
        <strong>Leaning Objectives:</strong><br />
        <ul style="margin: 0px; padding: 0px 0px 0px 15px">
        	<li>${lo1}</li>
        	<li>${lo2}</li>
        	<li>${lo3}</li>
        </ul>
        
        ${disclosure ? `<br /><strong>Disclosure: </strong><br />${disclosure}` : ``}
        
        
        <a href="${link}" target="_blank" style="text-transform:uppercase; font-family:Gotham, sans-serif;  font-size:16px; background:#bf2a26; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center;margin-bottom:18px; margin:14px 0 14px 0; text-decoration:none;">${cta}</a>
            </td>
                      </tr>
                    <tr>
                      <td valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; "><img src="http://aegispublications.com/news/idt/2015/05/nbc.jpg" width="187" height="58" alt=""/></td>
                    </tr>
                    </tbody>
                </table>        </td>
            </tr>
            ${tvLink ? 
                `<tr>
                
                        <Webinar Software Requirements>
                
                        <td colspan="2" style="padding:12px; font-size:13px; color:#666666;">
                
                            <span style="font-weight:bold;">
                
                                Webinar Hardware/Software Requirements
                
                            </span>
                
                            <br />
                
                            <table cellpadding="0" cellspacing="0" border="0">
                
                                <tr>
                
                                    <td style="font-size:11px;">
                
                                        CDEWorld requires Internet Explorer® version 7.0 or higher, or Firefox 3.0 or higher, a computer running Windows® XP, Windows® Vista, Windows® 7, or Mac OS X, 512MB of RAM or greater, 1.5 GHZ or faster processor, and a screen resolution of 1024x768 or higher. This activity will be marked with the information and/or links to the required software. That software may be 
                
                                        <a href="http://success.adobe.com/en/na/sem/products/acrobat/acrobat.html" target="_blank" style="text-decoration:none; color:#005fae;">Adobe® Acrobat®</a>, 
                
                                        <a href="http://windows.microsoft.com/en-us/windows/download-windows-media-player?hq_e=el&hq_m=1273132&hq_l=5&hq_v=af1cdf3968" target="_blank" style="text-decoration:none; color:#005fae;">Windows Media® Player</a>, or 
                
                                        <a href="http://www.microsoft.com/getsilverlight/get-started/install/default.aspx?hq_e=el&hq_m=1273132&hq_l=6&hq_v=af1cdf3968" target="_blank" style="text-decoration:none; color:#005fae;">Microsoft® Silverlight</a>.
                
                                    </td>
                
                                    <td>
                
                                        <table cellpadding="0" cellspacing="0" border="0" width="240">
                
                                            <tr>
                
                                                <td width="74">
                
                                                    <a href="${tvLink}" target="_blank" style="text-decoration:none;">
                
                                                        <img src="http://forms.coronapro.com/images/tv_with_interference_full.gif" width="74" height="86" />
                
                                                    </a>
                
                                                </td>
                
                                                <td style="font-size:11px; line-height:13px;">
                
                                                    <a href="${tvLink}">
                
                                                        Be sure to test your setup here <em><strong>BEFORE</strong></em> the Webinar to ensure everything is working properly! Click here to test your setup!
                
                                                    </a>
                
                                                </td>
                
                                            </tr>
                
                                        </table>
                
                                    </td>
                
                                </tr>
                
                            </table>
                
                        </td>
                
                        <!-- /Webinar Software Requirements -->
                
                  </tr>` 
                : 
                ''
            }


            <tr>
            <td  colspan="2" align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
              
              <br>
              You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dental Technology</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" target="_blank" style="color:#666; text-decoration:none;">reply-207852@news.aegispublications.com</a> to your address book<br />
              ${unsubscribe}<br />
              <em>Inside Dental Technology</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a></td>
            </tr>
            <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
          </tbody>
        </table>
        </center>
        </body></html>`;

//Text Email        
let textEmail = `Inside Dental Technology Webinar

${title}       
${link}

Presenter: ${presenter}
Date: ${date}
Provider: ${provider}
Commercial Supporter: ${supporter}
Cost: ${cost}
CDE Credits: ${credits}

Description:\n${description}\n${lo1 && lo2 && lo3 ? `\nLearning Objectives:\n${lo1}\n${lo2}\n${lo3}\n` : ''}${disclosure ? `\nDisclosure:\n${disclosure}\n` : ``}\n${link}

${tvLink? `Be sure to test your setup here BEFORE the Webinar to ensure everything is working properly!
http://forms.coronapro.com/2y1pylWI

Webinar Hardware/Software Requirements
CDEWorld requires Internet Explorer® version 7.0 or higher, or Firefox 3.0 or higher, a computer running Windows® XP, Windows® Vista, Windows® 7, or Mac OS X, 512MB of RAM or greater, 1.5 GHZ or faster processor, and a screen resolution of 1024x768 or higher. This activity will be marked with the information and/or links to the required software. That software may be Adobe® Acrobat®, Windows Media®Player or Microsoft® Silverlight™.`: ``}
`;  
        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);

        return (
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