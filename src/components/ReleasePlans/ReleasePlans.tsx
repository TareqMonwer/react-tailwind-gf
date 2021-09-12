import featureReleaseDates from "assets/component-releases";
import "components/ReleasePlans/ReleasePlans.css";

const ReleasePlans = () => (
  <>
    <h1>Components Release Deadlines:</h1>

    <table className="releaseCycleTable">
      <thead>
        <tr>
          <th className="featureCol">Feature</th>
          <th>Release Date</th>
          <th>Released</th>
        </tr>
      </thead>
      <tbody>
        {featureReleaseDates?.map(planItem => (
          <tr>
            <td>{planItem.featureName}</td>
            <td>{planItem.releaseDate}</td>
            <td>{planItem.isReleased ? 'YES' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export default ReleasePlans;