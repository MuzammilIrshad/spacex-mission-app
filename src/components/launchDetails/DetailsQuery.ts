import gql from 'graphql-tag';


export const GetLaunchDetails = gql`

query launchInfo($id:String){
 launch(id:$id) {
    launch_success
    rocket {
      rocket_name
    }
    details
    links {
      flickr_images
      video_link
    }
    launch_site {
      site_name
    }
    mission_name
  }
}
`;