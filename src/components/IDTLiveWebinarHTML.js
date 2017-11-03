import React from 'react';
import DOMPurify from 'dompurify';


export default class IDTLiveWebinarHTML extends React.Component {
    render() {
        const { title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, tvLink, unsubscribe } = this.props.info[this.props.info.selected_template];
        let html;

        let start = `<!doctype html>
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
                      Having trouble viewing this email? <a href="http://aegispublications.com/news/idt/2017/10/Planmeca-Webinar-Tonight.html" target="_blank" style="color:#db1f28; text-decoration:none; line-height:18px;">Click here.</a>
                </div>
              </td>
            </tr>
            <tr>
              <td><img src="http://aegispublications.com/news/idt/2015/05/webinar-side.jpg" width="193" height="652" alt=""  style="border-top:#000000 solid 1px;"/></td>
              <td valign="top">
              <a href="http://cdeworld.coronapro.com/live/2017-10-25_plameca"><img src="http://aegispublications.com/news/idt/2015/06/tonight.jpg" width="407" height="156" alt=""/></a>
                <table width="394" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td width="424" valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; ">
                      
        
        <span style="font-family:Arial, sans-serif; font-size:18px; color:#424b52; text-align:left; line-height:auto; font-weight:bold;">The Collaboration Between the Dentist and Laboratory in the Digital Age</span>
        <br>
        <strong><br>
        Presenter</strong>: Gary Kaye, DDS<br>
        Wednesday, October 25, 2017<br />7:00pm EDT<br><br />
        <strong>CE Credits:</strong> 1 Interactive CEU<br>
        <strong>Cost: </strong>$0.00<br />
        <strong>Supported by:</strong> <em>Planmeca - E4D Technologies</em><br>
        <a href="http://cdeworld.coronapro.com/live/2017-10-25_plameca" target="_blank">
        <img src="http://aegispublications.com/news/idt/2015/06/btn2.jpg" style="margin:14px 0 14px 0;"></a>
        <br>
        <strong>Description:</strong><br />
        The presentation will detail the digital restorative workflow and highlight clinical cases that demonstrate how the dentist and laboratory are collaborating today to provide improved patient care.<br /><br />
        <strong>Disclosure: </strong><br />
        Dr. Kaye has received an honorarium for his preparation and presentation of this program.
            </td>
                      </tr>
                    <tr>
                      <td valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; "><img src="http://aegispublications.com/news/idt/2015/05/nbc.jpg" width="187" height="58" alt=""/></td>
                    </tr>
                    </tbody>
                </table>        </td>
            </tr>
            <tr>
        
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
        
                                            <a href="http://cdeworld.coronapro.com/live/video_streaming_test_id_w_cde?returnredir=2017-10-25_plameca" target="_blank" style="text-decoration:none;">
        
                                                <img src="http://forms.coronapro.com/images/tv_with_interference_full.gif" width="74" height="86" />
        
                                            </a>
        
                                        </td>
        
                                        <td style="font-size:11px; line-height:13px;">
        
                                            <a href="http://cdeworld.coronapro.com/live/video_streaming_test_id_w_cde?returnredir=2017-10-25_plameca" target="_blank" style="color:#9d0707; text-decoration:none;">
        
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
        
            <!--</tr>-->
        
            
        
            <!--<tr>
        
                <td colspan="2">
        
                    <hr size="1" color="#dedede" width="575" />
        
                </td>
        
            </tr>-->
        
        
            <tr>
              <td colspan="2" align="center" valign="top" 
                 style="font-family:Arial, sans-serif; font-size:10px; color:#424b52; text-align:center; padding:14px 14px 14px 14px; border-top:solid 1px #000000; border-bottom:solid 1px #000000;"> 
                                            Inside Dental Technology | 104 Pheasant Run, Suite 105 | Newtown, PA 18940<br>
                  %%PLUGIN_UNSUBSCRIBE: 2147849-UNSUBSCRIBE%%
                </td>
            </tr>
          </tbody>
        </table>
        </center>
        </body></html>`;

        html = start;
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html);
        let textEmail = `IDT Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;

        return (
            <div >
                <div className="content" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div><br />
                HTML:< br />
                <textarea value={html} readOnly={true} className="copyArea" /><br />
                <br />
                TEXT EMAIL:< br />
                <textarea value={textEmail} readOnly={true} className="copyArea" />
            </div>
        );
    }
}