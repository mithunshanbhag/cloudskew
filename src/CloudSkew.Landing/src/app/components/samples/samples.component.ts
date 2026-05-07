import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GalleryItem } from './galleryItem';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent {

  //
  galleryItems: GalleryItem[] = [
    {
      title: 'Alibaba Cloud',
      description: 'Video on demand solution',
      thumbnailUrl: '../../../assets/thumbnails/alibaba.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/alibaba-elearning-vod-solution.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/4c67e28b-5991-48e1-ab3c-eb9ace54292e',
    },
    {
      title: 'AWS',
      description: 'Smart products platform',
      thumbnailUrl: '../../../assets/thumbnails/aws.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/aws-smart-products-platform.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/e21cca59-ada0-48a1-928a-6628042afebf',
    },
    {
      title: 'Azure',
      description: 'Microservices on AKS',
      thumbnailUrl: '../../../assets/thumbnails/azure.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/microservices-on-aks.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/eb335650-d335-463b-bde5-b94af25d042c',
    },
    {
      title: 'GCP',
      description: 'Real-time retail inventory',
      thumbnailUrl: '../../../assets/thumbnails/gcp.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/gcp-realtime-retail-inventory.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/af9976e8-a302-4451-b0e2-d048a76424fa',
    },
    {
      title: 'Kubernetes',
      description: 'Kubernetes resource map',
      thumbnailUrl: '../../../assets/thumbnails/kubernetes.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/kubernetes-resource-map.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/0610ccbc-c6b6-4167-9fa9-2903a513da08',
    },
    {
      title: 'Oracle Cloud (OCI)',
      description: 'Migration of on-prem db to OCI',
      thumbnailUrl: '../../../assets/thumbnails/oci.png',
      imgUrl: `${environment.cdnUrlPrefix}/assets/samples/oci-onprem-db-migration.png`,
      shareUrl: 'https://app.cloudskew.com/viewer/0831890b-183d-49ca-9818-57c1af749a3f',
    },
  ];

  constructor() { }

}
