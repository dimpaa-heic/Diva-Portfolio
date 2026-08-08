export default function AuroraBackground() {
  return (
    <div className="aurora-layer" aria-hidden="true">
      {/* Moving gradient wash — colors flow diagonally across the whole page */}
      {/* <div className="aurora-gradient-wash" /> */}

      {/* Soft glowing blobs for depth */}
      <div className="aurora-blob b1" />
      <div className="aurora-blob b2" />
      <div className="aurora-blob b3" />
      <div className="aurora-blob b4" />

      {/* Diagonal light streaks */}
      <div className="aurora-streaks" />
    </div>
  )
}
