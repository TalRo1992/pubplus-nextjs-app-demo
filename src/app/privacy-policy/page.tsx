import { getPrivacyPolicy } from "../api/sites";

const PrivacyPolicyPage = async() => {
  const privacyPolicy:any = await getPrivacyPolicy();
console.log('PrivacyPolicyPage works on server side!')
return (
  <div className="main-article">
    <div dangerouslySetInnerHTML={{ __html: privacyPolicy?.privacyPolicy }} />
  </div>

);
}
export default PrivacyPolicyPage;