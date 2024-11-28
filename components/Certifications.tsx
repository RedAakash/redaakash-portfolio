export default function Certifications() {
    const certifications = [
      'AWS Certified Solutions Architect',
      'Certified Kubernetes Administrator (CKA)',
      'Microsoft Certified: Azure Administrator',
    ];
  
    return (
      <section id="certifications" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <ul className="list-disc list-inside">
            {certifications.map((cert, index) => (
              <li key={index} className="text-lg">{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  