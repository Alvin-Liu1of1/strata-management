
export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to Strata Management Portal</h1>
      <p>This website helps you manage your building&apos;s operations efficiently.</p>

      <h2>📢 Latest Announcements</h2>
      <ul>
        <li>🚿 Water outage: May 20th, 9AM–12PM</li>
        <li>🏢 AGM meeting scheduled: June 5th, 6PM in the lobby</li>
      </ul>

      <h2>📬 Contact the Committee</h2>
      <p>
        Send your issues or questions to:{" "}
        <a href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}>
          {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
        </a>
      </p>

      <h2>📷 Building Photo</h2>
      <img src="/building.jpg" alt="Building" style={{ width: "300px", borderRadius: "10px" }} />
    </main>
  );
}
