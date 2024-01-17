import { getTermsOfService } from "../api/sites";

const TermsOfServicePage = async () => {
  const termsOfService:any = await getTermsOfService();
    console.log(termsOfService, 'staticPages------------------');
  console.log('TermsOfServicePage works on server side!')
  return (
    <div className="main-article">
      <div dangerouslySetInnerHTML={{ __html: termsOfService?.termsOfService }} />
    </div>

  );
}
export default TermsOfServicePage;