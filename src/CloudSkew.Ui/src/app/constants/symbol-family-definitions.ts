import { ImageModel } from '@syncfusion/ej2-angular-diagrams';
import { BasicShapeModel, ConnectorModel, NodeModel, ShapeStyleModel, TextModel, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { DiagramConstants } from 'src/app/constants/diagram-constants';
import { SymbolDisplayNameConstants } from 'src/app/constants/symbol-display-name-constants';
import { SymbolGroupDisplayNameConstants } from 'src/app/constants/symbol-group-display-name-constants';
import { SymbolIdConstants } from 'src/app/constants/symbol-id-constants';
import { ISymbolFamilyDefinition } from 'src/app/interfaces/symbol-family-definition';
import { ColorHexCodeConstants } from './color-hex-codes-constants';
import { SymbolFamilyConstants } from './symbol-family-constants';
import { SymbolGroupConstants } from './symbol-group-constants';
import { UrlConstants } from './url-constants';

export const SymbolFamilyDefinitions: ISymbolFamilyDefinition[] = [

    //#region Alibaba Cloud

    {
        id: SymbolFamilyConstants.Alibaba,
        displayName: 'Alibaba Cloud',
        SymbolGroups: [

            //#region Alibaba Analysis

            {
                id: SymbolGroupConstants.AlibabaAnalysisSearch,
                displayName: SymbolGroupDisplayNameConstants.AlibabaAnalysisSearch,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'alicloudhpc',
                        displayName: 'AliCloud HPC',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/alicloudhpc.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'analyticdb',
                        displayName: 'AnalyticDB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/analyticdb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elasticsearch',
                        displayName: 'Elasticsearch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/elasticsearch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'e-mapreduce',
                        displayName: 'E-MapReduce',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/e-mapreduce.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'log-service',
                        displayName: 'Log-Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/log-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'maxcompute',
                        displayName: 'MaxCompute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/maxcompute.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'open-search',
                        displayName: 'Open Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaAnalysisSearch}/open-search.svg`
                    },
                ],
            },

            //#endregion Alibaba Analysis

            //#region Alibaba Application Service

            {
                id: SymbolGroupConstants.AlibabaApplicationService,
                displayName: SymbolGroupDisplayNameConstants.AlibabaApplicationService,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-gateway',
                        displayName: 'API Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/api-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-ap',
                        displayName: 'Cloud AP',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/cloud-ap.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-call-center',
                        displayName: 'Cloud Call Center',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/cloud-call-center.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-customer-service',
                        displayName: 'Cloud Customer Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/cloud-customer-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-desktop',
                        displayName: 'Cloud Desktop',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/cloud-desktop.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-screencast',
                        displayName: 'Cloud Screencast',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/cloud-screencast.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codepipeline',
                        displayName: 'CodePipeline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/codepipeline.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'intelligent-service-robot',
                        displayName: 'Intelligent Service Robot',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/intelligent-service-robot.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message-service',
                        displayName: 'Message Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/message-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-admission-control',
                        displayName: 'Network Admission Control',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/network-admission-control.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'robotic-process-automation',
                        displayName: 'Robotic Process Automation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/robotic-process-automation.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smart-conversation-analysis',
                        displayName: 'Smart Conversation Analysis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApplicationService}/smart-conversation-analysis.svg`
                    },
                ],
            },

            //#endregion Alibaba Application Service

            //#region Alibaba Apsara Mobile

            {
                id: SymbolGroupConstants.AlibabaApsaraMobile,
                displayName: SymbolGroupDisplayNameConstants.AlibabaApsaraMobile,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-accelerator',
                        displayName: 'Mobile Accelerator',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-accelerator.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-analytics',
                        displayName: 'Mobile Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-analytics.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-feedback',
                        displayName: 'Mobile Feedback',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-feedback.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-gateway',
                        displayName: 'Mobile Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-hotfix',
                        displayName: 'Mobile Hotfix',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-hotfix.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-testing',
                        displayName: 'Mobile Testing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaApsaraMobile}/mobile-testing.svg`
                    },
                ],
            },

            //#endregion Alibaba Apsara Mobile

            //#region Alibaba BigData Analysis

            {
                id: SymbolGroupConstants.AlibabaBigDataAnalysis,
                displayName: SymbolGroupDisplayNameConstants.AlibabaBigDataAnalysis,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'datav',
                        displayName: 'Data V',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataAnalysis}/datav.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'graph-analytics',
                        displayName: 'Graph Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataAnalysis}/graph-analytics.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-analysis',
                        displayName: 'Image Analysis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataAnalysis}/image-analysis.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'quick-bi',
                        displayName: 'Quick BI',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataAnalysis}/quick-bi.svg`
                    },
                ],
            },

            //#endregion Alibaba BigData Analysis

            //#region Alibaba BigData Application

            {
                id: SymbolGroupConstants.AlibabaBigDataApplication,
                displayName: SymbolGroupDisplayNameConstants.AlibabaBigDataApplication,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-profile',
                        displayName: 'Enterprise Profile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/enterprise-profile.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'open-ad',
                        displayName: 'Open Ad',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/open-ad.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'prophet',
                        displayName: 'Prophet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/prophet.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'recommendation-engine',
                        displayName: 'Recommendation Engine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/recommendation-engine.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'recommendation-engine-2',
                        displayName: 'Recommendation Engine 2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/recommendation-engine-2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rules-engine',
                        displayName: 'Rules Engine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataApplication}/rules-engine.svg`
                    },
                ],
            },

            //#endregion Alibaba BigData Application

            //#region Alibaba BigData Basic

            {
                id: SymbolGroupConstants.AlibabaBigDataBasic,
                displayName: SymbolGroupDisplayNameConstants.AlibabaBigDataBasic,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'analytic-db',
                        displayName: 'Analytic DB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/analytic-db.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'datahub',
                        displayName: 'DataHub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/datahub.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-integration',
                        displayName: 'Data Integration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/data-integration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dataphin',
                        displayName: 'Dataphin',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/dataphin.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dataworks',
                        displayName: 'DataWorks',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/dataworks.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ide',
                        displayName: 'IDE',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/ide.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'maxcompute',
                        displayName: 'MaxCompute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/maxcompute.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'streamcompute',
                        displayName: 'StreamCompute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaBigDataBasic}/streamcompute.svg`
                    },
                ],
            },

            //#endregion Alibaba BigData Basic

            //#region Alibaba Communication

            {
                id: SymbolGroupConstants.AlibabaCommunication,
                displayName: SymbolGroupDisplayNameConstants.AlibabaCommunication,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cellular-data-package',
                        displayName: 'Cellular Data Package',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/cellular-data-package.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'direct-mail',
                        displayName: 'Direct Mail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/direct-mail.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-wireless-connectivity-service',
                        displayName: 'IOT Wireless Connectivity Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/iot-wireless-connectivity-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message-service',
                        displayName: 'Message Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/message-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-push',
                        displayName: 'Mobile Push',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/mobile-push.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'phone-number-protection',
                        displayName: 'Phone Number Protection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/phone-number-protection.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sms',
                        displayName: 'SMS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/sms.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'voice-messaging-service',
                        displayName: 'Voice Messaging Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaCommunication}/voice-messaging-service.svg`
                    },
                ],
            },

            //#endregion Alibaba Communication

            //#region Alibaba Database

            {
                id: SymbolGroupConstants.AlibabaDatabase,
                displayName: SymbolGroupDisplayNameConstants.AlibabaDatabase,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'advanced-database-application-migration',
                        displayName: 'Advanced Database Application & Migration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/advanced-database-application-migration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaradb-for-hbase',
                        displayName: 'ApsaraDB for HBase',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/apsaradb-for-hbase.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaradb-for-memcache',
                        displayName: 'ApsaraDB for Memcache',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/apsaradb-for-memcache.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaradb-for-mongodb',
                        displayName: 'ApsaraDB for MongoDB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/apsaradb-for-mongodb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaradb-for-rds',
                        displayName: 'ApsaraDB for RDS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/apsaradb-for-rds.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaradb-for-redis',
                        displayName: 'ApsaraDB for Redis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/apsaradb-for-redis.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-backup',
                        displayName: 'Database Backup',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/database-backup.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-management-system',
                        displayName: 'Database Management System',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/database-management-system.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-transmission-service',
                        displayName: 'Data Transmission Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/data-transmission-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'distributed-relational-database-service',
                        displayName: 'Distributed Relational Database Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/distributed-relational-database-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elasticsearch',
                        displayName: 'Elasticsearch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/elasticsearch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'high-performance-time-series-database',
                        displayName: 'High Performance Time Series Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/high-performance-time-series-database.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybrid-cloud-database-management',
                        displayName: 'Hybrid Cloud Database Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/hybrid-cloud-database-management.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybriddb',
                        displayName: 'HybridDB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/hybriddb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybriddb-for-mysql',
                        displayName: 'HybridDB for MySQL',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/hybriddb-for-mysql.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybriddb-for-postgresql',
                        displayName: 'HybridDB for PostgreSQL',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/hybriddb-for-postgresql.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'oceanbase',
                        displayName: 'OceanBase',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/oceanbase.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'opensearch',
                        displayName: 'OpenSearch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/opensearch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'polardb',
                        displayName: 'PolarDB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/polardb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tablestore',
                        displayName: 'TableStore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDatabase}/tablestore.svg`
                    },
                ],
            },

            //#endregion Alibaba Database

            //#region Alibaba Dedicated Cloud

            {
                id: SymbolGroupConstants.AlibabaDedicatedCloud,
                displayName: SymbolGroupDisplayNameConstants.AlibabaDedicatedCloud,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsara-stack-enterprise',
                        displayName: 'Apsara Stack Enterprise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDedicatedCloud}/apsara-stack-enterprise.svg`
                    },
                ],
            },

            //#endregion Alibaba Dedicated Cloud

            //#region Alibaba Domains and Websites

            {
                id: SymbolGroupConstants.AlibabaDomainsWebsites,
                displayName: SymbolGroupDisplayNameConstants.AlibabaDomainsWebsites,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-web-hosting',
                        displayName: 'Cloud Web Hosting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/cloud-web-hosting.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'corporate-website',
                        displayName: 'Corporate Website',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/corporate-website.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dns',
                        displayName: 'DNS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/dns.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'domain-registration',
                        displayName: 'Domain Registration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/domain-registration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'domains-websites',
                        displayName: 'Domains & Websites',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/domains-websites.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-web-hosting',
                        displayName: 'Elastic Web Hosting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/elastic-web-hosting.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'exmail',
                        displayName: 'ExMail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/exmail.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'httpdns',
                        displayName: 'HttpDNS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/httpdns.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-hosting',
                        displayName: 'Web Hosting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaDomainsWebsites}/web-hosting.svg`
                    },
                ],
            },

            //#endregion Alibaba Domains and Websites

            //#region Alibaba Elastic Computing

            {
                id: SymbolGroupConstants.AlibabaElasticComputing,
                displayName: SymbolGroupDisplayNameConstants.AlibabaElasticComputing,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'batchcompute',
                        displayName: 'Batch Compute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/batchcompute.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'block-storage',
                        displayName: 'Block Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/block-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-registry',
                        displayName: 'Container Registry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/container-registry.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-service',
                        displayName: 'Container Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/container-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ecs-bare-metal-instance',
                        displayName: 'ECS Bare Metal Instance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/ecs-bare-metal-instance.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'e-hpc',
                        displayName: 'E-HPC',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/e-hpc.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-compute-service',
                        displayName: 'Elastic Compute Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/elastic-compute-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-scaling-service',
                        displayName: 'Elastic Scaling Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/elastic-scaling-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fpga',
                        displayName: 'FPGA',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/fpga.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'function-compute',
                        displayName: 'Function Compute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/function-compute.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gpu',
                        displayName: 'GPU',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/gpu.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-orchestration',
                        displayName: 'Resource Orchestration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/resource-orchestration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server-load-balancer',
                        displayName: 'Server Load Balancer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/server-load-balancer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'simple-application-server',
                        displayName: 'Simple Application Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/simple-application-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'super-computing-cluster',
                        displayName: 'Super Computing Cluster',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/super-computing-cluster.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-private-cloud',
                        displayName: 'Virtual Private Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaElasticComputing}/virtual-private-cloud.svg`
                    },
                ],
            },

            //#endregion Alibaba Elastic Computing

            //#region Alibaba IOT

            {
                id: SymbolGroupConstants.AlibabaIOT,
                displayName: SymbolGroupDisplayNameConstants.AlibabaIOT,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-suite',
                        displayName: 'IOT Suite',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaIOT}/iot-suite.svg`
                    },
                ],
            },

            //#endregion Alibaba IOT

            //#region Alibaba Machine Learning

            {
                id: SymbolGroupConstants.AlibabaMachineLearning,
                displayName: SymbolGroupDisplayNameConstants.AlibabaMachineLearning,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'face-recognition',
                        displayName: 'Face Recognition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/face-recognition.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-recognition',
                        displayName: 'Image Recognition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/image-recognition.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-search',
                        displayName: 'Image Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/image-search.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'machine-learning',
                        displayName: 'Machine Learning',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/machine-learning.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'natural-language-service',
                        displayName: 'Natural Language Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/natural-language-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ocr',
                        displayName: 'OCR',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMachineLearning}/ocr.svg`
                    },
                ],
            },

            //#endregion Alibaba Machine Learning

            //#region Alibaba Media Services

            {
                id: SymbolGroupConstants.AlibabaMediaServices,
                displayName: SymbolGroupDisplayNameConstants.AlibabaMediaServices,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaravideo-for-media-processing',
                        displayName: 'ApsaraVideo for Media Processing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMediaServices}/apsaravideo-for-media-processing.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaravideo-for-vod',
                        displayName: 'ApsaraVideo for VoD',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMediaServices}/apsaravideo-for-vod.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apsaravideo-live',
                        displayName: 'ApsaraVideo Live',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMediaServices}/apsaravideo-live.svg`
                    },
                ],
            },

            //#endregion Alibaba Media Services

            //#region Alibaba Middleware

            {
                id: SymbolGroupConstants.AlibabaMiddleware,
                displayName: SymbolGroupDisplayNameConstants.AlibabaMiddleware,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'advanced-database-application-migration',
                        displayName: 'Advanced Database Application & Migration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/advanced-database-application-migration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-distributed-application-service',
                        displayName: 'Enterprise Distributed Application Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/enterprise-distributed-application-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'global-transaction-service',
                        displayName: 'Global Transaction Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/global-transaction-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message-queue',
                        displayName: 'Message Queue',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/message-queue.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message-queue-for-kafka',
                        displayName: 'Message Queue for Kafka',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/message-queue-for-kafka.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'performance-testing',
                        displayName: 'Performance Testing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/performance-testing.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'schedulerx',
                        displayName: 'SchedulerX',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMiddleware}/schedulerx.svg`
                    },
                ],
            },

            //#endregion Alibaba Middleware

            //#region Alibaba Misc

            {
                id: SymbolGroupConstants.AlibabaMisc,
                displayName: SymbolGroupDisplayNameConstants.AlibabaMisc,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'business-party',
                        displayName: 'Business Party',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMisc}/business-party.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'open-api',
                        displayName: 'Open API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMisc}/open-api.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'open-api-2',
                        displayName: 'Open API 2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMisc}/open-api-2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sdk',
                        displayName: 'SDK',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaMisc}/sdk.svg`
                    },
                ],
            },

            //#endregion Alibaba Misc

            //#region Alibaba Monitoring Management

            {
                id: SymbolGroupConstants.AlibabaManagement,
                displayName: SymbolGroupDisplayNameConstants.AlibabaManagement,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'actiontrail',
                        displayName: 'ActionTrail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/actiontrail.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-configuration-management',
                        displayName: 'Application Configuration Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/application-configuration-management.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-real-time-monitoring-service',
                        displayName: 'Application Real-Time Monitoring Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/application-real-time-monitoring-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudmonitor',
                        displayName: 'CloudMonitor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/cloudmonitor.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'intelligent-advisor',
                        displayName: 'Intelligent Advisor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/intelligent-advisor.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-management-service',
                        displayName: 'Key Management Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/key-management-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-access-management',
                        displayName: 'Resource Access Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/resource-access-management.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-orchestration',
                        displayName: 'Resource Orchestration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaManagement}/resource-orchestration.svg`
                    },
                ],
            },

            //#endregion Alibaba Monitoring Management

            //#region Alibaba Networking

            {
                id: SymbolGroupConstants.AlibabaNetworking,
                displayName: SymbolGroupDisplayNameConstants.AlibabaNetworking,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-enterprise-network',
                        displayName: 'Cloud Enterprise Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/cloud-enterprise-network.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-hosting',
                        displayName: 'Cloud Hosting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/cloud-hosting.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-storage-gateway',
                        displayName: 'Cloud Storage Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/cloud-storage-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'content-delivery-network',
                        displayName: 'Content Delivery Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/content-delivery-network.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-ip-address',
                        displayName: 'Elastic IP Address',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/elastic-ip-address.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'express-connect',
                        displayName: 'Express Connect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/express-connect.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'flowbag',
                        displayName: 'Flowbag',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/flowbag.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'global-acceleration',
                        displayName: 'Global Acceleration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/global-acceleration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'nat-gateway',
                        displayName: 'NAT Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/nat-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-admission-control',
                        displayName: 'Network Admission Control',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/network-admission-control.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'p2p-cdn',
                        displayName: 'P2P CDN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/p2p-cdn.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server-load-balancer',
                        displayName: 'Server Load Balancer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/server-load-balancer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'shared-bandwidth',
                        displayName: 'Shared Bandwidth',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/shared-bandwidth.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smart-access-gateway',
                        displayName: 'Smart Access Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/smart-access-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-private-cloud',
                        displayName: 'Virtual Private Cloud (VPC)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/virtual-private-cloud.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpn-gateway',
                        displayName: 'VPN Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaNetworking}/vpn-gateway.svg`
                    },
                ],
            },

            //#endregion Alibaba Networking

            //#region Alibaba Security

            {
                id: SymbolGroupConstants.AlibabaSecurity,
                displayName: SymbolGroupDisplayNameConstants.AlibabaSecurity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'anti-ddos',
                        displayName: 'Anti-DDOS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/anti-ddos.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'anti-fraud',
                        displayName: 'Anti-Fraud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/anti-fraud.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automated-vulnerability-detection-system',
                        displayName: 'Automated Vulnerability Detection System',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/automated-vulnerability-detection-system.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bastion-host',
                        displayName: 'Bastion Host',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/bastion-host.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'certificates-service',
                        displayName: 'Certificates Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/certificates-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-authentication',
                        displayName: 'Cloud Authentication',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/cloud-authentication.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-firewall',
                        displayName: 'Cloud Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/cloud-firewall.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'content-moderation',
                        displayName: 'Content Moderation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/content-moderation.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-auditing',
                        displayName: 'Database Auditing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/database-auditing.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-encryption-service',
                        displayName: 'Data Encryption Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/data-encryption-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gameshield',
                        displayName: 'GameShield',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/gameshield.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-security',
                        displayName: 'Mobile Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/mobile-security.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-service',
                        displayName: 'Security Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/security-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-situation-awareness',
                        displayName: 'Security Situation Awareness',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/security-situation-awareness.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-test',
                        displayName: 'Security Test',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/security-test.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-test-2',
                        displayName: 'Security Test 2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/security-test-2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-token-service',
                        displayName: 'Security Token Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/security-token-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server-guard',
                        displayName: 'Server Guard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/server-guard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sos',
                        displayName: 'SOS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/sos.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-application-firewall',
                        displayName: 'Web Application Firewall (WAF)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaSecurity}/web-application-firewall.svg`
                    },
                ],
            },

            //#endregion Alibaba Security

            //#region Alibaba Storage and CDN

            {
                id: SymbolGroupConstants.AlibabaStorageCDN,
                displayName: SymbolGroupDisplayNameConstants.AlibabaStorageCDN,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'archive-storage',
                        displayName: 'Archive Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/archive-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'block-storage',
                        displayName: 'Block Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/block-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-photos',
                        displayName: 'Cloud Photos',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/cloud-photos.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-storage-gateway',
                        displayName: 'Cloud Storage Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/cloud-storage-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'content-delivery-network',
                        displayName: 'Content Delivery Network (CDN)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/content-delivery-network.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dynamic-route-for-content-delivery-network',
                        displayName: 'Dynamic Route for CDN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/dynamic-route-for-content-delivery-network.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybrid-backup-recovery',
                        displayName: 'Hybrid Backup Recovery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/hybrid-backup-recovery.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybrid-cloud-storage-array',
                        displayName: 'Hybrid Cloud Storage Array',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/hybrid-cloud-storage-array.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hybrid-disaster-recovery',
                        displayName: 'Hybrid Disaster Recovery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/hybrid-disaster-recovery.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lightning-cube',
                        displayName: 'Lightning Cube',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/lightning-cube.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-attached-storage',
                        displayName: 'Network Attached Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/network-attached-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'object-storage-service',
                        displayName: 'Object Storage Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/object-storage-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'secure-content-delivery-network',
                        displayName: 'Secure Content Delivery Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/secure-content-delivery-network.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'table-store',
                        displayName: 'Table Store',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/table-store.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'yundun-hybrid-cloud',
                        displayName: 'Yundun Hybrid Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Alibaba}/${SymbolGroupConstants.AlibabaStorageCDN}/yundun-hybrid-cloud.svg`
                    },
                ],
            },

            //#endregion Alibaba Storage and CDN

        ],
    },

    //#endregion Alibaba Cloud

    //#region AWS

    {
        id: SymbolFamilyConstants.AWS,
        displayName: 'AWS',
        SymbolGroups: [

            //#region AWS Analytics

            {
                id: SymbolGroupConstants.AwsAnalytics,
                displayName: SymbolGroupDisplayNameConstants.AwsAnalytics,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'athena',
                        displayName: 'Athena',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/athena.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/athena/',
                            'Pricing Details': 'https://aws.amazon.com/athena/pricing/',
                            'SLA': 'https://aws.amazon.com/athena/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudsearch',
                        displayName: 'Cloudsearch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/cloudsearch.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudsearch/',
                            'Pricing Details': 'https://aws.amazon.com/cloudsearch/pricing/',
                            'SLA': 'https://aws.amazon.com/cloudsearch/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-pipeline',
                        displayName: 'Data Pipeline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/data-pipeline.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/data-pipeline/',
                            'Pricing Details': 'https://aws.amazon.com/datapipeline/pricing/',
                            'SLA': 'https://aws.amazon.com/datapipeline/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elasticsearch-service',
                        displayName: 'Elasticsearch Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/elasticsearch-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elasticsearch-service/',
                            'Pricing Details': 'https://aws.amazon.com/elasticsearch-service/pricing/',
                            'SLA': 'https://aws.amazon.com/elasticsearch-service/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'emr',
                        displayName: 'EMR',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/emr.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/emr/',
                            'Pricing Details': 'https://aws.amazon.com/emr/pricing/',
                            'SLA': 'https://aws.amazon.com/emr/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'glue',
                        displayName: 'Glue',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/glue.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/glue/',
                            'Pricing Details': 'https://aws.amazon.com/glue/pricing/',
                            'SLA': 'https://aws.amazon.com/glue/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis-data-analytics',
                        displayName: 'Kinesis Data Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/kinesis-data-analytics.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/data-analytics/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis-data-firehose',
                        displayName: 'Kinesis Data Firehose',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/kinesis-data-firehose.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/data-firehose/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis-data-streams',
                        displayName: 'Kinesis Data Streams',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/kinesis-data-streams.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/data-streams/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis-video-streams',
                        displayName: 'Kinesis Video Streams',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/kinesis-video-streams.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/video-streams/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis',
                        displayName: 'Kinesis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/kinesis.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/data-analytics/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lake-formation',
                        displayName: 'Lake Formation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/lake-formation.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/lake-formation/',
                            'Pricing Details': 'https://aws.amazon.com/lake-formation/pricing/',
                            'SLA': 'https://aws.amazon.com/lake-formation/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-streaming-for-kafka',
                        displayName: 'Managed Streaming for Kafka (MSK)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/managed-streaming-for-kafka.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/msk/',
                            'Pricing Details': 'https://aws.amazon.com/msk/pricing/',
                            'SLA': 'https://aws.amazon.com/msk/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'quicksight',
                        displayName: 'Quicksight',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/quicksight.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/quicksight/',
                            'Pricing Details': 'https://aws.amazon.com/quicksight/pricing/',
                            'SLA': 'https://aws.amazon.com/quicksight/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'redshift',
                        displayName: 'Redshift',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAnalytics}/redshift.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/redshift/',
                            'Pricing Details': 'https://aws.amazon.com/redshift/pricing/',
                            'SLA': 'https://aws.amazon.com/redshift/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Analytics

            //#region AWS Application Integration

            {
                id: SymbolGroupConstants.AwsAppIntegration,
                displayName: SymbolGroupDisplayNameConstants.AwsAppIntegration,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'appsync',
                        displayName: 'AppSync',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/appsync.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/appsync/',
                            'Pricing Details': 'https://aws.amazon.com/appsync/pricing/',
                            'SLA': 'https://aws.amazon.com/appsync/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aws-console-mobile-application',
                        displayName: 'AWS Console Mobile Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/aws-console-mobile-application.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'eventbridge',
                        displayName: 'EventBridge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/eventbridge.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/eventbridge/',
                            'Pricing Details': 'https://aws.amazon.com/eventbridge/pricing/',
                            'SLA': 'https://aws.amazon.com/eventbridge/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mq',
                        displayName: 'MQ',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/mq.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/amazon-mq/',
                            'Pricing Details': 'https://aws.amazon.com/amazon-mq/pricing/',
                            'SLA': 'https://aws.amazon.com/amazon-mq/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'simple-notification-service',
                        displayName: 'Simple Notification Service (SNS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/simple-notification-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/sns/',
                            'Pricing Details': 'https://aws.amazon.com/sns/pricing/',
                            'SLA': 'https://aws.amazon.com/messaging/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'simple-queue-service',
                        displayName: 'Simple Queue Service (SQS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/simple-queue-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/sqs/',
                            'Pricing Details': 'https://aws.amazon.com/sqs/pricing/',
                            'SLA': 'https://aws.amazon.com/messaging/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'step-functions',
                        displayName: 'Step Functions',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsAppIntegration}/step-functions.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/step-functions/',
                            'Pricing Details': 'https://aws.amazon.com/step-functions/pricing/',
                            'SLA': 'https://aws.amazon.com/step-functions/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Application Integration

            //#region AWS Compute

            {
                id: SymbolGroupConstants.AwsCompute,
                displayName: SymbolGroupDisplayNameConstants.AwsCompute,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-auto-scaling',
                        displayName: 'Application Auto Scaling',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/application-auto-scaling.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/autoscaling/',
                            'Pricing Details': 'https://aws.amazon.com/autoscaling/pricing/',
                            'SLA': 'https://aws.amazon.com/autoscaling/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'batch',
                        displayName: 'Batch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/batch.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/batch/',
                            'Pricing Details': 'https://aws.amazon.com/batch/pricing/',
                            'SLA': 'https://aws.amazon.com/batch/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ec2-auto-scaling',
                        displayName: 'EC2 Auto Scaling',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/ec2-auto-scaling.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ec2/',
                            'Pricing Details': 'https://aws.amazon.com/autoscaling/pricing/',
                            'SLA': 'https://aws.amazon.com/autoscaling/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'ec2 container registry',
                        ],
                        id: 'ec2-container-registry',
                        displayName: 'Elastic Container Registry (ECR)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/ec2-container-registry.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ecr/',
                            'Pricing Details': 'https://aws.amazon.com/ecr/pricing/',
                            'SLA': 'https://aws.amazon.com/ecr/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ec2',
                        displayName: 'EC2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/ec2.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ec2/',
                            'Pricing Details': 'https://aws.amazon.com/ec2/pricing/',
                            'SLA': 'https://aws.amazon.com/compute/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-beanstalk',
                        displayName: 'Elastic Beanstalk',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/elastic-beanstalk.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elastic-beanstalk/',
                            'Pricing Details': 'https://aws.amazon.com/elasticbeanstalk/pricing/',
                            'SLA': 'https://aws.amazon.com/elasticbeanstalk/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-container-service',
                        displayName: 'Elastic Container Service (ECS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/elastic-container-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ecs/',
                            'Pricing Details': 'https://aws.amazon.com/ecs/pricing/',
                            'SLA': 'https://aws.amazon.com/compute/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-kubernetes-service',
                        displayName: 'Elastic Kubernetes Service (EKS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/elastic-kubernetes-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/eks/',
                            'Pricing Details': 'https://aws.amazon.com/eks/pricing/',
                            'SLA': 'https://aws.amazon.com/eks/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fargate',
                        displayName: 'Fargate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/fargate.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ecs/',
                            'Pricing Details': 'https://aws.amazon.com/fargate/pricing/',
                            'SLA': 'https://aws.amazon.com/compute/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lambda',
                        displayName: 'Lambda',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/lambda.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/lambda/',
                            'Pricing Details': 'https://aws.amazon.com/lambda/pricing/',
                            'SLA': 'https://aws.amazon.com/lambda/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lightsail',
                        displayName: 'Lightsail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/lightsail.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/lightsail/',
                            'Pricing Details': 'https://aws.amazon.com/lightsail/pricing/',
                            'SLA': 'https://aws.amazon.com/lightsail/sla-lightsail-instances-and-block-storage/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'outposts',
                        displayName: 'Outposts',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/outposts.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/outposts/',
                            'Pricing Details': 'https://aws.amazon.com/outposts/pricing/',
                            'SLA': 'https://aws.amazon.com/outposts/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'serverless-application-repository',
                        displayName: 'Serverless Application Repository',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/serverless-application-repository.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-deadline',
                        displayName: 'Thinkbox Deadline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-deadline.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-draft',
                        displayName: 'Thinkbox Draft',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-draft.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-frost',
                        displayName: 'Thinkbox Frost',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-frost.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-krakatoa',
                        displayName: 'Thinkbox Krakatoa',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-krakatoa.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-sequoia',
                        displayName: 'Thinkbox Sequoia',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-sequoia.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-stoke',
                        displayName: 'Thinkbox Stoke',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-stoke.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thinkbox-xmesh',
                        displayName: 'Thinkbox XMesh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/thinkbox-xmesh.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.thinkboxsoftware.com/',
                            'Pricing Details': 'https://www.awsthinkbox.com/product-pricing',
                            'SLA': 'https://www.awsthinkbox.com/support',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vmware-cloud-on-aws',
                        displayName: 'VMWare Cloud on Aws',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCompute}/vmware-cloud-on-aws.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/vmware/',
                            'Pricing Details': 'https://cloud.vmware.com/vmc-aws/pricing',
                            'SLA': 'https://aws.amazon.com/vmware/faqs/',
                        },
                    },
                ],
            },

            //#endregion AWS Compute

            //#region AWS Customer

            {
                id: SymbolGroupConstants.AwsCustomer,
                displayName: SymbolGroupDisplayNameConstants.AwsCustomer,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'connect',
                        displayName: 'Connect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/connect.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/connect/',
                            'Pricing Details': 'https://aws.amazon.com/connect/pricing/',
                            'SLA': 'https://aws.amazon.com/connect/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iq',
                        displayName: 'IQ',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/iq.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/aws-iq/',
                            'Pricing Details': 'https://aws.amazon.com/iq/pricing/',
                            'SLA': 'https://aws.amazon.com/service-terms/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-services',
                        displayName: 'Managed Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/managed-services.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/managed-services/',
                            'Pricing Details': 'https://aws.amazon.com/managed-services/faqs/',
                            'SLA': 'https://aws.amazon.com/service-terms/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pinpoint',
                        displayName: 'Pinpoint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/pinpoint.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/pinpoint/',
                            'Pricing Details': 'https://aws.amazon.com/pinpoint/pricing/',
                            'SLA': 'https://aws.amazon.com/pinpoint/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'professional-services',
                        displayName: 'Professional Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/professional-services.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/professional-services/',
                            'Pricing Details': 'https://aws.amazon.com/professional-services/',
                            'SLA': 'https://aws.amazon.com/service-terms/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'simple-email-service',
                        displayName: 'Simple Email Service (SES)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/simple-email-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ses/',
                            'Pricing Details': 'https://aws.amazon.com/ses/pricing/',
                            'SLA': 'https://aws.amazon.com/pinpoint/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'support',
                        displayName: 'Support',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsCustomer}/support.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/premiumsupport/',
                            'Pricing Details': 'https://aws.amazon.com/premiumsupport/pricing/',
                            'SLA': 'https://aws.amazon.com/service-terms/',
                        },
                    },
                ],
            },

            //#endregion AWS Customer

            //#region AWS Database

            {
                id: SymbolGroupConstants.AwsDatabase,
                displayName: SymbolGroupDisplayNameConstants.AwsDatabase,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aurora',
                        displayName: 'Aurora',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/aurora.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/rds/',
                            'Pricing Details': 'https://aws.amazon.com/rds/aurora/pricing/',
                            'SLA': 'https://aws.amazon.com/rds/aurora/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-migration-service',
                        displayName: 'Database Migration Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/database-migration-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/dms/',
                            'Pricing Details': 'https://aws.amazon.com/dms/pricing/',
                            'SLA': 'https://aws.amazon.com/dms/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'documentdb-with-mongodb-compatibility',
                        displayName: 'DocumentDB (with MongoDB Compatibility)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/documentdb-with-mongodb-compatibility.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/documentdb/',
                            'Pricing Details': 'https://aws.amazon.com/documentdb/pricing/',
                            'SLA': 'https://aws.amazon.com/documentdb/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dynamodb',
                        displayName: 'DynamoDB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/dynamodb.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/dynamodb/',
                            'Pricing Details': 'https://aws.amazon.com/dynamodb/pricing/',
                            'SLA': 'https://aws.amazon.com/dynamodb/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elasticache',
                        displayName: 'ElastiCache',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/elasticache.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elasticache/',
                            'Pricing Details': 'https://aws.amazon.com/elasticache/pricing/',
                            'SLA': 'https://aws.amazon.com/elasticache/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'neptune',
                        displayName: 'Neptune',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/neptune.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/neptune/',
                            'Pricing Details': 'https://aws.amazon.com/neptune/pricing/',
                            'SLA': 'https://aws.amazon.com/neptune/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'qldb',
                        displayName: 'Quantum Ledger Database (QLDB)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/qldb.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/qldb/',
                            'Pricing Details': 'https://aws.amazon.com/qldb/pricing/',
                            'SLA': 'https://aws.amazon.com/qldb/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rds-on-vmware',
                        displayName: 'RDS on VMWare',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/rds-on-vmware.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/rds/',
                            'Pricing Details': 'https://aws.amazon.com/rds/vmware/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rds',
                        displayName: 'RDS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/rds.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/rds/',
                            'Pricing Details': 'https://aws.amazon.com/rds/pricing/',
                            'SLA': 'https://aws.amazon.com/rds/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'redshift',
                        displayName: 'Redshift',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/redshift.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/redshift/',
                            'Pricing Details': 'https://aws.amazon.com/redshift/pricing/',
                            'SLA': 'https://aws.amazon.com/redshift/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'timestream',
                        displayName: 'Timestream',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDatabase}/timestream.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/timestream/',
                            'Pricing Details': 'https://aws.amazon.com/timestream/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                ],
            },

            //#endregion AWS Database

            //#region AWS Developer Tools

            {
                id: SymbolGroupConstants.AwsDeveloperTools,
                displayName: SymbolGroupDisplayNameConstants.AwsDeveloperTools,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-development-kit',
                        displayName: 'Cloud Development Kit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/cloud-development-kit.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud9',
                        displayName: 'Cloud9',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/cloud9.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloud9/',
                            'Pricing Details': 'https://aws.amazon.com/cloud9/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codebuild',
                        displayName: 'CodeBuild',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/codebuild.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/codebuild/',
                            'Pricing Details': 'https://aws.amazon.com/codebuild/pricing/',
                            'SLA': 'https://aws.amazon.com/codebuild/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codecommit',
                        displayName: 'CodeCommit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/codecommit.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/codecommit/',
                            'Pricing Details': 'https://aws.amazon.com/codecommit/pricing/',
                            'SLA': 'https://aws.amazon.com/codecommit/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codedeploy',
                        displayName: 'CodeDeploy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/codedeploy.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/codedeploy/',
                            'Pricing Details': 'https://aws.amazon.com/codedeploy/pricing/',
                            'SLA': 'https://aws.amazon.com/codedeploy/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codepipeline',
                        displayName: 'CodePipeline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/codepipeline.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/codepipeline/',
                            'Pricing Details': 'https://aws.amazon.com/codepipeline/pricing/',
                            'SLA': 'https://aws.amazon.com/codepipeline/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'codestar',
                        displayName: 'CodeStar',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/codestar.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/codestar/',
                            'Pricing Details': 'https://aws.amazon.com/codestar/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'command-line-interface',
                        displayName: 'Command Line Interface (CLI)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/command-line-interface.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tools-and-sdks',
                        displayName: 'Tools and SDKs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/tools-and-sdks.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'x-ray',
                        displayName: 'X-Ray',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsDeveloperTools}/x-ray.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/xray/',
                            'Pricing Details': 'https://aws.amazon.com/xray/pricing/',
                            'SLA': 'https://aws.amazon.com/xray/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Developer Tools

            //#region AWS End User Computing

            {
                id: SymbolGroupConstants.AwsEndUserComputing,
                displayName: SymbolGroupDisplayNameConstants.AwsEndUserComputing,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'appstream-2.0',
                        displayName: 'AppStream 2.0',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsEndUserComputing}/appstream-2.0.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/appstream2/',
                            'Pricing Details': 'https://aws.amazon.com/appstream2/pricing/',
                            'SLA': 'https://aws.amazon.com/appstream2/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workdocs',
                        displayName: 'WorkDocs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsEndUserComputing}/workdocs.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/workdocs/',
                            'Pricing Details': 'https://aws.amazon.com/workdocs/pricing/',
                            'SLA': 'https://aws.amazon.com/workdocs/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'worklink',
                        displayName: 'WorkLink',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsEndUserComputing}/worklink.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/worklink/',
                            'Pricing Details': 'https://aws.amazon.com/worklink/pricing/',
                            'SLA': 'https://aws.amazon.com/worklink/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workspaces',
                        displayName: 'WorkSpaces',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsEndUserComputing}/workspaces.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/workspaces/',
                            'Pricing Details': 'https://aws.amazon.com/workspaces/pricing/',
                            'SLA': 'https://aws.amazon.com/workspaces/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS End User Computing

            //#region AWS Governance

            {
                id: SymbolGroupConstants.AwsGovernance,
                displayName: SymbolGroupDisplayNameConstants.AwsGovernance,
                tags: [
                    'management',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'auto-scaling',
                        displayName: 'Auto Scaling',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/auto-scaling.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/autoscaling/',
                            'Pricing Details': 'https://aws.amazon.com/autoscaling/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'budgets',
                        displayName: 'Budgets',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/budgets.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/account-billing/',
                            'Pricing Details': 'https://aws.amazon.com/aws-cost-management/pricing/',
                            'SLA': 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudformation',
                        displayName: 'CloudFormation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/cloudformation.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudformation/',
                            'Pricing Details': 'https://aws.amazon.com/cloudformation/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudtrail',
                        displayName: 'CloudTrail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/cloudtrail.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudtrail/',
                            'Pricing Details': 'https://aws.amazon.com/cloudtrail/pricing/',
                            'SLA': 'https://aws.amazon.com/cloudtrail/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudwatch',
                        displayName: 'CloudWatch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/cloudwatch.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudwatch/',
                            'Pricing Details': 'https://aws.amazon.com/cloudwatch/pricing/',
                            'SLA': 'https://aws.amazon.com/cloudwatch/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'config',
                        displayName: 'Config',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/config.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/config/',
                            'Pricing Details': 'https://aws.amazon.com/config/pricing/',
                            'SLA': 'https://aws.amazon.com/config/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'control-tower',
                        displayName: 'Control Tower',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/control-tower.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/controltower/',
                            'Pricing Details': 'https://aws.amazon.com/controltower/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-and-usage-report',
                        displayName: 'Cost and Usage Report',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/cost-and-usage-report.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/account-billing/',
                            'Pricing Details': 'https://aws.amazon.com/aws-cost-management/pricing/',
                            'SLA': 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-explorer',
                        displayName: 'Cost Explorer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/cost-explorer.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/account-billing/',
                            'Pricing Details': 'https://aws.amazon.com/aws-cost-management/pricing/',
                            'SLA': 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'license-manager',
                        displayName: 'License Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/license-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/license-manager/',
                            'Pricing Details': 'https://aws.amazon.com/license-manager/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-services',
                        displayName: 'Managed Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/managed-services.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/managed-services/',
                            'Pricing Details': 'https://aws.amazon.com/managed-services/faqs/',
                            'SLA': 'https://aws.amazon.com/managed-services/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'management-console',
                        displayName: 'Management Console',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/management-console.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'opsworks',
                        displayName: 'OpsWorks',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/opsworks.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/opsworks/',
                            'Pricing Details': 'https://aws.amazon.com/opsworks/stacks/pricing',
                            'SLA': 'https://aws.amazon.com/opsworks/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'organizations',
                        displayName: 'Organizations',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/organizations.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/organizations/',
                            'Pricing Details': 'https://aws.amazon.com/organizations/faqs/',
                            'SLA': 'https://aws.amazon.com/organizations/faqs/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'personal-health-dashboard',
                        displayName: 'Personal Health Dashboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/personal-health-dashboard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'reserved-instance-reporting',
                        displayName: 'Reserved Instance Reporting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/reserved-instance-reporting.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-catalog',
                        displayName: 'Service Catalog',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/service-catalog.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/servicecatalog/',
                            'Pricing Details': 'https://aws.amazon.com/servicecatalog/pricing/',
                            'SLA': 'https://aws.amazon.com/servicecatalog/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'systems-manager',
                        displayName: 'Systems Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/systems-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/systems-manager/',
                            'Pricing Details': 'https://aws.amazon.com/systems-manager/pricing/',
                            'SLA': 'https://aws.amazon.com/systems-manager/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'trusted-advisor',
                        displayName: 'Trusted Advisor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/trusted-advisor.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'well-architected-tool',
                        displayName: 'Well-Architected Tool',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsGovernance}/well-architected-tool.svg`
                    },
                ],
            },

            //#endregion AWS Governance

            //#region AWS IOT

            {
                id: SymbolGroupConstants.AwsIOT,
                displayName: SymbolGroupDisplayNameConstants.AwsIOT,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'freertos',
                        displayName: 'FreeRTOS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/freertos.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/freertos/',
                            'Pricing Details': 'https://aws.amazon.com/freertos/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-1-click',
                        displayName: 'IoT 1-Click',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-1-click.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iot-1-click/',
                            'Pricing Details': 'https://aws.amazon.com/iot-1-click/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-1-click/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-analytics',
                        displayName: 'IoT Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-analytics.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iotanalytics/',
                            'Pricing Details': 'https://aws.amazon.com/iot-analytics/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-analytics/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-button',
                        displayName: 'IoT Button',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-button.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-core',
                        displayName: 'IoT Core',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-core.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iot/',
                            'Pricing Details': 'https://aws.amazon.com/iot-core/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-core/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-device-defender',
                        displayName: 'IoT Device Defender',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-device-defender.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iot-device-defender/',
                            'Pricing Details': 'https://aws.amazon.com/iot-device-defender/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-device-defender/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-device-management',
                        displayName: 'IoT Device Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-device-management.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iot-device-management/',
                            'Pricing Details': 'https://aws.amazon.com/iot-device-management/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-device-management/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-events',
                        displayName: 'IoT Events',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-events.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iotevents/',
                            'Pricing Details': 'https://aws.amazon.com/iot-events/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-events/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-greengrass',
                        displayName: 'IoT Greengrass',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-greengrass.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/greengrass/',
                            'Pricing Details': 'https://aws.amazon.com/greengrass/pricing/',
                            'SLA': 'https://aws.amazon.com/greengrass/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-sitewise',
                        displayName: 'IoT SiteWise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-sitewise.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iot-sitewise/',
                            'Pricing Details': 'https://aws.amazon.com/iot-sitewise/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-things-graph',
                        displayName: 'IoT Things Graph',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsIOT}/iot-things-graph.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/thingsgraph/',
                            'Pricing Details': 'https://aws.amazon.com/iot-things-graph/pricing/',
                            'SLA': 'https://aws.amazon.com/iot-things-graph/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS IOT

            //#region AWS Machine Learning

            {
                id: SymbolGroupConstants.AwsML,
                displayName: SymbolGroupDisplayNameConstants.AwsML,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apache-mxnet-on-aws',
                        displayName: 'Apache MXNet on AWS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/apache-mxnet-on-aws.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'comprehend',
                        displayName: 'Comprehend',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/comprehend.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/comprehend/',
                            'Pricing Details': 'https://aws.amazon.com/comprehend/pricing/',
                            'SLA': 'https://aws.amazon.com/machine-learning/language/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'deep-learning-amis',
                        displayName: 'Deep Learning AMIs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/deep-learning-amis.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/dlami/',
                            'Pricing Details': 'https://docs.aws.amazon.com/dlami/latest/devguide/pricing.html',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'deep-learning-containers',
                        displayName: 'Deep Learning Containers',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/deep-learning-containers.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/deep-learning-containers/',
                            'Pricing Details': 'https://aws.amazon.com/machine-learning/containers/faqs/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'deeplens',
                        displayName: 'DeepLens',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/deeplens.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'deepracer',
                        displayName: 'DeepRacer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/deepracer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-inference',
                        displayName: 'Elastic Inference',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/elastic-inference.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elastic-inference/',
                            'Pricing Details': 'https://aws.amazon.com/machine-learning/elastic-inference/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'forecast',
                        displayName: 'Forecast',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/forecast.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/forecast/',
                            'Pricing Details': 'https://aws.amazon.com/forecast/pricing/',
                            'SLA': 'https://aws.amazon.com/forecast/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lex',
                        displayName: 'Lex',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/lex.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/lex/',
                            'Pricing Details': 'https://aws.amazon.com/lex/pricing/',
                            'SLA': 'https://aws.amazon.com/machine-learning/language/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'personalize',
                        displayName: 'Personalize',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/personalize.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/personalize/',
                            'Pricing Details': 'https://aws.amazon.com/personalize/pricing/',
                            'SLA': 'https://aws.amazon.com/personalize/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'polly',
                        displayName: 'Polly',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/polly.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/polly/',
                            'Pricing Details': 'https://aws.amazon.com/polly/pricing/',
                            'SLA': 'https://aws.amazon.com/machine-learning/language/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rekognition',
                        displayName: 'Rekognition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/rekognition.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/rekognition/',
                            'Pricing Details': 'https://aws.amazon.com/rekognition/pricing/',
                            'SLA': 'https://aws.amazon.com/rekognition/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sagemaker-ground-truth',
                        displayName: 'SageMaker Ground Truth',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/sagemaker-ground-truth.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/sagemaker/groundtruth/',
                            'Pricing Details': 'https://aws.amazon.com/sagemaker/groundtruth/pricing/',
                            'SLA': 'https://aws.amazon.com/sagemaker/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sagemaker',
                        displayName: 'SageMaker',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/sagemaker.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/sagemaker/',
                            'Pricing Details': 'https://aws.amazon.com/sagemaker/pricing/',
                            'SLA': 'https://aws.amazon.com/sagemaker/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tensorflow-on-aws',
                        displayName: 'Tensorflow on AWS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/tensorflow-on-aws.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'textract',
                        displayName: 'Textract',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/textract.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/textract/',
                            'Pricing Details': 'https://aws.amazon.com/textract/pricing/',
                            'SLA': 'https://aws.amazon.com/textract/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transcribe',
                        displayName: 'Transcribe',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/transcribe.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/transcribe/',
                            'Pricing Details': 'https://aws.amazon.com/transcribe/pricing/',
                            'SLA': 'https://aws.amazon.com/machine-learning/language/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'translate',
                        displayName: 'Translate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsML}/translate.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/translate/',
                            'Pricing Details': 'https://aws.amazon.com/translate/pricing/',
                            'SLA': 'https://aws.amazon.com/machine-learning/language/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Machine Learning

            //#region AWS Media Services

            {
                id: SymbolGroupConstants.AwsMediaServices,
                displayName: SymbolGroupDisplayNameConstants.AwsMediaServices,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-transcoder',
                        displayName: 'Elastic Transcoder',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elastic-transcoder.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elastic-transcoder/',
                            'Pricing Details': 'https://aws.amazon.com/elastictranscoder/pricing/',
                            'SLA': 'https://aws.amazon.com/elastictranscoder/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-conductor',
                        displayName: 'Elemental Conductor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-conductor.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-delta',
                        displayName: 'Elemental Delta',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-delta.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-live',
                        displayName: 'Elemental Live',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-live.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-mediaconnect',
                        displayName: 'Elemental MediaConnect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-mediaconnect.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/mediaconnect/',
                            'Pricing Details': 'https://aws.amazon.com/mediaconnect/pricing/',
                            'SLA': 'https://aws.amazon.com/mediaconnect/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-mediaconvert',
                        displayName: 'Elemental MediaConvert',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-mediaconvert.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/mediaconvert/',
                            'Pricing Details': 'https://aws.amazon.com/mediaconvert/pricing/',
                            'SLA': 'https://aws.amazon.com/mediaconvert/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-medialive',
                        displayName: 'Elemental MediaLive',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-medialive.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/medialive/',
                            'Pricing Details': 'https://aws.amazon.com/medialive/pricing/',
                            'SLA': 'https://aws.amazon.com/medialive/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-mediapackage',
                        displayName: 'Elemental MediaPackage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-mediapackage.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/mediapackage/',
                            'Pricing Details': 'https://aws.amazon.com/mediapackage/pricing/',
                            'SLA': 'https://aws.amazon.com/mediapackage/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-mediastore',
                        displayName: 'Elemental MediaStore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-mediastore.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/mediastore/',
                            'Pricing Details': 'https://aws.amazon.com/mediastore/pricing/',
                            'SLA': 'https://aws.amazon.com/mediastore/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-mediatailor',
                        displayName: 'Elemental MediaTailor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-mediatailor.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/mediatailor/',
                            'Pricing Details': 'https://aws.amazon.com/mediatailor/pricing/',
                            'SLA': 'https://aws.amazon.com/mediatailor/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elemental-server',
                        displayName: 'Elemental Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/elemental-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kinesis-video-streams',
                        displayName: 'Kinesis Video Streams',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMediaServices}/kinesis-video-streams.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kinesis/index.html',
                            'Pricing Details': 'https://aws.amazon.com/kinesis/video-streams/pricing/',
                            'SLA': 'https://aws.amazon.com/kinesis/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Media Services

            //#region AWS Migration

            {
                id: SymbolGroupConstants.AwsMigration,
                displayName: SymbolGroupDisplayNameConstants.AwsMigration,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-discovery-service',
                        displayName: 'Application Discovery Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/application-discovery-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/application-discovery/',
                            'Pricing Details': 'https://aws.amazon.com/application-discovery/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudendure-migration',
                        displayName: 'CloudEndure Migration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/cloudendure-migration.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/cloudendure-migration/',
                            'Pricing Details': 'https://aws.amazon.com/cloudendure-migration/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-migration-service',
                        displayName: 'Database Migration Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/database-migration-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/dms/',
                            'Pricing Details': 'https://aws.amazon.com/dms/pricing/',
                            'SLA': 'https://aws.amazon.com/dms/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'datasync',
                        displayName: 'DataSync',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/datasync.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/datasync/',
                            'Pricing Details': 'https://aws.amazon.com/datasync/pricing/',
                            'SLA': 'https://aws.amazon.com/transfer/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'migration-hub',
                        displayName: 'Migration Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/migration-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/migrationhub/',
                            'Pricing Details': 'https://aws.amazon.com/migration-hub/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server-migration-service',
                        displayName: 'Server Migration Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/server-migration-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/server-migration-service/',
                            'Pricing Details': 'https://aws.amazon.com/server-migration-service/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowball-edge',
                        displayName: 'Snowball Edge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/snowball-edge.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/snowball/',
                            'Pricing Details': 'https://aws.amazon.com/snowball/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowball',
                        displayName: 'Snowball',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/snowball.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/snowball/',
                            'Pricing Details': 'https://aws.amazon.com/snowball/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowmobile',
                        displayName: 'Snowmobile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/snowmobile.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/snowmobile/',
                            'Pricing Details': 'https://aws.amazon.com/snowmobile/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transfer-for-sftp',
                        displayName: 'Transfer for SFTP',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMigration}/transfer-for-sftp.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/transfer/',
                            'Pricing Details': 'https://aws.amazon.com/aws-transfer-family/pricing/',
                            'SLA': 'https://aws.amazon.com/transfer/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Migration

            //#region AWS Miscellaneous

            {
                id: SymbolGroupConstants.AwsMiscellaneous,
                displayName: SymbolGroupDisplayNameConstants.AwsMiscellaneous,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'alexa-for-business',
                        displayName: 'Alexa for Business',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/alexa-for-business.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/a4b/',
                            'Pricing Details': 'https://aws.amazon.com/alexaforbusiness/pricing/',
                            'SLA': 'https://aws.amazon.com/alexaforbusiness/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'chime',
                        displayName: 'Chime',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/chime.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/chime/',
                            'Pricing Details': 'https://aws.amazon.com/chime/pricing/',
                            'SLA': 'https://aws.amazon.com/chime/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gamelift',
                        displayName: 'GameLift',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/gamelift.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/gamelift/',
                            'Pricing Details': 'https://aws.amazon.com/gamelift/pricing/',
                            'SLA': 'https://aws.amazon.com/gamelift/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ground-station',
                        displayName: 'Ground Station',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/ground-station.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ground-station/',
                            'Pricing Details': 'https://aws.amazon.com/ground-station/pricing/',
                            'SLA': 'https://aws.amazon.com/ground-station/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-blockchain',
                        displayName: 'Managed Blockchain',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/managed-blockchain.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/managed-blockchain/',
                            'Pricing Details': 'https://aws.amazon.com/managed-blockchain/pricing/',
                            'SLA': 'https://aws.amazon.com/managed-blockchain/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'marketplace',
                        displayName: 'Marketplace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/marketplace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'quantum-ledger-database',
                        displayName: 'Quantum Ledger Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/quantum-ledger-database.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/qldb/',
                            'Pricing Details': 'https://aws.amazon.com/qldb/pricing/',
                            'SLA': 'https://aws.amazon.com/qldb/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'robo-maker',
                        displayName: 'RoboMaker',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/robo-maker.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/robomaker/',
                            'Pricing Details': 'https://aws.amazon.com/robomaker/pricing/',
                            'SLA': 'https://aws.amazon.com/robomaker/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sumerian',
                        displayName: 'Sumerian',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/sumerian.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/sumerian/',
                            'Pricing Details': 'https://aws.amazon.com/sumerian/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workmail',
                        displayName: 'WorkMail',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMiscellaneous}/workmail.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/workmail/',
                            'Pricing Details': 'https://aws.amazon.com/workmail/pricing/',
                            'SLA': 'https://aws.amazon.com/workmail/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Miscellaneous

            //#region AWS Mobile

            {
                id: SymbolGroupConstants.AwsMobile,
                displayName: SymbolGroupDisplayNameConstants.AwsMobile,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'amplify',
                        displayName: 'Amplify',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMobile}/amplify.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/amplify/',
                            'Pricing Details': 'https://aws.amazon.com/amplify/console/pricing/',
                            'SLA': 'https://aws.amazon.com/amplify/console/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-farm',
                        displayName: 'Device Farm',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMobile}/device-farm.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/devicefarm/',
                            'Pricing Details': 'https://aws.amazon.com/device-farm/pricing/',
                            'SLA': 'https://aws.amazon.com/device-farm/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pinpoint',
                        displayName: 'Pinpoint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsMobile}/pinpoint.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/pinpoint/',
                            'Pricing Details': 'https://aws.amazon.com/pinpoint/pricing/',
                            'SLA': 'https://aws.amazon.com/pinpoint/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Mobile

            //#region AWS Networking

            {
                id: SymbolGroupConstants.AwsNetworking,
                displayName: SymbolGroupDisplayNameConstants.AwsNetworking,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-gateway',
                        displayName: 'API Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/api-gateway.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/apigateway/',
                            'Pricing Details': 'https://aws.amazon.com/api-gateway/pricing/',
                            'SLA': 'https://aws.amazon.com/api-gateway/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-mesh',
                        displayName: 'App Mesh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/app-mesh.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/app-mesh/',
                            'Pricing Details': 'https://aws.amazon.com/app-mesh/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'client-vpn',
                        displayName: 'Client VPN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/client-vpn.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/vpn/',
                            'Pricing Details': 'https://aws.amazon.com/vpn/pricing/',
                            'SLA': 'https://aws.amazon.com/vpn/client-vpn-sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-map',
                        displayName: 'Cloud Map',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/cloud-map.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloud-map/',
                            'Pricing Details': 'https://aws.amazon.com/cloud-map/pricing/',
                            'SLA': 'https://aws.amazon.com/cloud-map/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudfront',
                        displayName: 'CloudFront',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/cloudfront.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudfront/',
                            'Pricing Details': 'https://aws.amazon.com/cloudfront/pricing/',
                            'SLA': 'https://aws.amazon.com/cloudfront/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'direct-connect',
                        displayName: 'Direct Connect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/direct-connect.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/directconnect/',
                            'Pricing Details': 'https://aws.amazon.com/directconnect/pricing/',
                            'SLA': 'https://aws.amazon.com/directconnect/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-load-balancing',
                        displayName: 'Elastic Load Balancing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/elastic-load-balancing.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/elasticloadbalancing/',
                            'Pricing Details': 'https://aws.amazon.com/elasticloadbalancing/pricing/',
                            'SLA': 'https://aws.amazon.com/elasticloadbalancing/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'global-accelerator',
                        displayName: 'Global Accelerator',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/global-accelerator.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/global-accelerator/',
                            'Pricing Details': 'https://aws.amazon.com/global-accelerator/pricing/',
                            'SLA': 'https://aws.amazon.com/global-accelerator/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'privatelink',
                        displayName: 'PrivateLink',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/privatelink.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/privatelink/',
                            'Pricing Details': 'https://aws.amazon.com/privatelink/pricing/',
                            'SLA': 'https://aws.amazon.com/privatelink/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'route-53',
                        displayName: 'Route 53',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/route-53.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/route53/',
                            'Pricing Details': 'https://aws.amazon.com/route53/pricing/',
                            'SLA': 'https://aws.amazon.com/route53/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'site-to-site-vpn',
                        displayName: 'Site to Site VPN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/site-to-site-vpn.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/vpn/',
                            'Pricing Details': 'https://aws.amazon.com/vpn/pricing/',
                            'SLA': 'https://aws.amazon.com/vpn/site-to-site-vpn-sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transit-gateway',
                        displayName: 'Transit Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/transit-gateway.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/vpc/latest/tgw/',
                            'Pricing Details': 'https://aws.amazon.com/transit-gateway/pricing/',
                            'SLA': 'https://aws.amazon.com/transit-gateway/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-private-cloud',
                        displayName: 'Virtual Private Cloud (VPC)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsNetworking}/virtual-private-cloud.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/vpc/',
                            'Pricing Details': 'https://aws.amazon.com/vpc/pricing/',
                            'SLA': 'https://aws.amazon.com/vpc/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Networking

            //#region AWS Security

            {
                id: SymbolGroupConstants.AwsSecurity,
                displayName: SymbolGroupDisplayNameConstants.AwsSecurity,
                tags: [
                    'identity',
                    'compliance',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'artifact',
                        displayName: 'Artifact',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/artifact.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'certificate-manager',
                        displayName: 'Certificate Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/certificate-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/acm/',
                            'Pricing Details': 'https://aws.amazon.com/certificate-manager/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-directory',
                        displayName: 'Cloud Directory',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/cloud-directory.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/clouddirectory/',
                            'Pricing Details': 'https://aws.amazon.com/cloud-directory/pricing/',
                            'SLA': 'https://aws.amazon.com/cloud-directory/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudhsm',
                        displayName: 'CloudHSM',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/cloudhsm.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cloudhsm/',
                            'Pricing Details': 'https://aws.amazon.com/cloudhsm/pricing/',
                            'SLA': 'https://aws.amazon.com/cloudhsm/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cognito',
                        displayName: 'Cognito',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/cognito.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/cognito/',
                            'Pricing Details': 'https://aws.amazon.com/cognito/pricing/',
                            'SLA': 'https://aws.amazon.com/cognito/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'directory-service',
                        displayName: 'Directory Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/directory-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/directory-service/',
                            'Pricing Details': 'https://aws.amazon.com/directoryservice/pricing/',
                            'SLA': 'https://aws.amazon.com/directoryservice/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'firewall-manager',
                        displayName: 'Firewall Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/firewall-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/firewall-manager/',
                            'Pricing Details': 'https://aws.amazon.com/firewall-manager/pricing/',
                            'SLA': 'https://aws.amazon.com/firewall-manager/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'guardduty',
                        displayName: 'GuardDuty',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/guardduty.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/guardduty/',
                            'Pricing Details': 'https://aws.amazon.com/guardduty/pricing/',
                            'SLA': 'https://aws.amazon.com/guardduty/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iam',
                        displayName: 'Identity and Access Management (IAM)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/iam.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/iam/',
                            'Pricing Details': 'https://aws.amazon.com/iam/faqs/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'inspector',
                        displayName: 'Inspector',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/inspector.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/inspector/',
                            'Pricing Details': 'https://aws.amazon.com/inspector/pricing/',
                            'SLA': 'https://aws.amazon.com/inspector/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-management-service',
                        displayName: 'Key Management Service (KMS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/key-management-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/kms/',
                            'Pricing Details': 'https://aws.amazon.com/kms/pricing/',
                            'SLA': 'https://aws.amazon.com/kms/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'macie',
                        displayName: 'Macie',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/macie.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/macie/',
                            'Pricing Details': 'https://aws.amazon.com/macie/pricing/',
                            'SLA': 'https://aws.amazon.com/macie/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-access-manager',
                        displayName: 'Resource Access Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/resource-access-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ram/',
                            'Pricing Details': 'https://aws.amazon.com/ram/faqs/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'secrets-manager',
                        displayName: 'Secrets Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/secrets-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/secretsmanager/',
                            'Pricing Details': 'https://aws.amazon.com/secrets-manager/pricing/',
                            'SLA': 'https://aws.amazon.com/secrets-manager/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-hub',
                        displayName: 'Security Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/security-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/securityhub/',
                            'Pricing Details': 'https://aws.amazon.com/security-hub/pricing/',
                            'SLA': 'https://aws.amazon.com/security-hub/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'shield',
                        displayName: 'Shield',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/shield.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/shield/',
                            'Pricing Details': 'https://aws.amazon.com/shield/pricing/',
                            'SLA': 'https://aws.amazon.com/shield/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'single-sign-on',
                        displayName: 'Single Sign-On',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/single-sign-on.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/singlesignon/',
                            'Pricing Details': 'https://aws.amazon.com/single-sign-on/faqs/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'waf',
                        displayName: 'Web Application Firewall (WAF)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsSecurity}/waf.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/waf/',
                            'Pricing Details': 'https://aws.amazon.com/waf/pricing/',
                            'SLA': 'https://aws.amazon.com/waf/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Security

            //#region AWS Storage

            {
                id: SymbolGroupConstants.AwsStorage,
                displayName: SymbolGroupDisplayNameConstants.AwsStorage,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'backup',
                        displayName: 'Backup',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/backup.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/aws-backup/',
                            'Pricing Details': 'https://aws.amazon.com/backup/pricing/',
                            'SLA': 'https://aws.amazon.com/backup/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudendure-disaster-recovery',
                        displayName: 'CloudEndure Disaster Recovery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/cloudendure-disaster-recovery.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/cloudendure-disaster-recovery/',
                            'Pricing Details': 'https://aws.amazon.com/cloudendure-disaster-recovery/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'efs-infrequentaccess',
                        displayName: 'EFS Infrequent Access',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/efs-infrequentaccess.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/efs/',
                            'Pricing Details': 'https://aws.amazon.com/efs/pricing/',
                            'SLA': 'https://aws.amazon.com/efs/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'efs-standard',
                        displayName: 'EFS Standard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/efs-standard.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/efs/',
                            'Pricing Details': 'https://aws.amazon.com/efs/pricing/',
                            'SLA': 'https://aws.amazon.com/efs/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-block-store',
                        displayName: 'Elastic Block Store (EBS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/elastic-block-store.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/ebs/',
                            'Pricing Details': 'https://aws.amazon.com/ebs/pricing/',
                            'SLA': 'https://aws.amazon.com/compute/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-file-system',
                        displayName: 'Elastic File System (EFS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/elastic-file-system.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/efs/',
                            'Pricing Details': 'https://aws.amazon.com/efs/pricing/',
                            'SLA': 'https://aws.amazon.com/efs/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fsx-for-lustre',
                        displayName: 'FSx for Lustre',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/fsx-for-lustre.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/fsx/',
                            'Pricing Details': 'https://aws.amazon.com/fsx/pricing/',
                            'SLA': 'https://aws.amazon.com/fsx/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fsx-for-windows-file-server',
                        displayName: 'FSx for Windows File Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/fsx-for-windows-file-server.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/fsx/',
                            'Pricing Details': 'https://aws.amazon.com/fsx/pricing/',
                            'SLA': 'https://aws.amazon.com/fsx/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fsx',
                        displayName: 'FSx',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/fsx.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/fsx/',
                            'Pricing Details': 'https://aws.amazon.com/fsx/pricing/',
                            'SLA': 'https://aws.amazon.com/fsx/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 's3-glacier',
                        displayName: 'S3 Glacier',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/s3-glacier.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/glacier/',
                            'Pricing Details': 'https://aws.amazon.com/glacier/pricing/',
                            'SLA': 'https://aws.amazon.com/s3/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'simple-storage-service',
                        displayName: 'Simple Storage Service (S3)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/simple-storage-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/s3/index.html',
                            'Pricing Details': 'https://aws.amazon.com/s3/pricing/',
                            'SLA': 'https://aws.amazon.com/s3/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowball-edge',
                        displayName: 'Snowball Edge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/snowball-edge.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/snowball/',
                            'Pricing Details': 'https://aws.amazon.com/snowball/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowball',
                        displayName: 'Snowball',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/snowball.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/snowball/',
                            'Pricing Details': 'https://aws.amazon.com/snowball/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowmobile',
                        displayName: 'Snowmobile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/snowmobile.svg`,
                        docs: {
                            'Official Documentation': 'https://aws.amazon.com/snowmobile/',
                            'Pricing Details': 'https://aws.amazon.com/snowmobile/pricing/',
                            'SLA': 'https://aws.amazon.com/legal/service-level-agreements/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-gateway',
                        displayName: 'Storage Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.AWS}/${SymbolGroupConstants.AwsStorage}/storage-gateway.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.aws.amazon.com/storagegateway/',
                            'Pricing Details': 'https://aws.amazon.com/storagegateway/pricing/',
                            'SLA': 'https://aws.amazon.com/transfer/sla/',
                        },
                    },
                ],
            },

            //#endregion AWS Storage

        ],
    },

    //#endregion AWS

    //#region AZURE

    {
        id: SymbolFamilyConstants.Azure,
        displayName: 'Azure',
        SymbolGroups: [

            //#region azure general

            {
                id: SymbolGroupConstants.AzureGeneral,
                displayName: SymbolGroupDisplayNameConstants.AzureGeneral,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'all-resources',
                        displayName: 'Resource (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/all-resources.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure',
                        displayName: 'Azure',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/azure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'archive-storage-generic',
                        displayName: 'Archive Storage (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/archive-storage-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blockchain-service',
                        displayName: 'Blockchain Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/blockchain-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/blockchain/service/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/blockchain-service/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-shell',
                        displayName: 'Cloud Shell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/cloud-shell.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dashboard',
                        displayName: 'Dashboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/dashboard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-lake-generic',
                        displayName: 'Data Lake (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/data-lake-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-generic',
                        displayName: 'Database (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/database-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'diagnostic-setting',
                        displayName: 'Diagnostic Setting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/diagnostic-setting.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hpc-cache',
                        displayName: 'HPC Cache',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/hpc-cache.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-in/azure/hpc-cache/',
                            'Pricing Details': 'https://azure.microsoft.com/en-in/pricing/details/hpc-cache/',
                            'SLA': 'https://azure.microsoft.com/en-in/support/legal/sla/hpc-cache/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'marketplace',
                        displayName: 'Marketplace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/marketplace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'remote-rendering',
                        displayName: 'Remote Rendering',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/remote-rendering.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-in/azure/remote-rendering/',
                            'Pricing Details': 'https://azure.microsoft.com/en-in/pricing/details/remote-rendering/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-generic',
                        displayName: 'Storage (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/storage-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vm-generic-non-azure',
                        displayName: 'VM (Generic, Non Azure)',
                        synonyms: [
                            'virtual machine'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/vm-generic-non-azure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vm-linux-generic-non-azure',
                        displayName: 'VM Linux (Generic, Non Azure)',
                        synonyms: [
                            'virtual machine'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/vm-linux-generic-non-azure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vm-windows-generic-non-azure',
                        displayName: 'VM Windows (Generic, Non Azure)',
                        synonyms: [
                            'virtual machine'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/vm-windows-generic-non-azure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'cloudsimple',
                            'avs',
                        ],
                        id: 'vmware-service',
                        displayName: 'VMWare Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGeneral}/vmware-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/vmware-cloudsimple/',
                            'Pricing Details': 'https://azure.microsoft.com/en-in/pricing/details/azure-vmware/',
                            'SLA': 'https://azure.microsoft.com/en-in/support/legal/sla/azure-vmware-cloudsimple/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure analytics

            {
                id: SymbolGroupConstants.AzureAnalytics,
                displayName: SymbolGroupDisplayNameConstants.AzureAnalytics,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'analysis-service',
                        displayName: 'Analysis Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/analysis-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/analysis-services/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/analysis-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/analysis-services/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-data-explorer-cluster',
                        displayName: 'Azure Data Explorer Cluster',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/azure-data-explorer-cluster.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/data-explorer/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/data-explorer/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/data-explorer/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-databricks',
                        displayName: 'Azure Databricks',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/azure-databricks.svg`,
                        docs: {
                            'Official Documentation': 'https://azure.microsoft.com/en-us/services/databricks/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/databricks/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/databricks/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-catalog',
                        displayName: 'Data Catalog',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/data-catalog.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/data-catalog/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/data-catalog/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/data-catalog/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-factory',
                        displayName: 'Azure Data Factory (ADF)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/data-factory.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/data-factory/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/data-factory/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/data-factory/v1_2/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-lake-analytics',
                        displayName: 'Azure Data Lake Analytics (ADLA)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/data-lake-analytics.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/data-lake-analytics/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/data-lake-analytics/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/data-lake-analytics/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hdinsight-cluster',
                        displayName: 'HDInsight Cluster',
                        synonyms: [
                            'hadoop'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/hdinsight-cluster.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/hdinsight/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/hdinsight/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/hdinsight/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stream-analytics-job',
                        displayName: 'Stream Analytics Job',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/stream-analytics-job.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/stream-analytics/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/stream-analytics/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/stream-analytics/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'synapse-analytics',
                        displayName: 'Synapse Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureAnalytics}/synapse-analytics.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/synapse-analytics/',
                            'SLA': 'https://azure.microsoft.com/en-in/support/legal/sla/synapse-analytics/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure compute

            {
                id: SymbolGroupConstants.AzureCompute,
                displayName: SymbolGroupDisplayNameConstants.AzureCompute,
                tags: [
                    'vm',
                    'vms',
                    'vhd',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'availability-set',
                        displayName: 'Availability Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/availability-set.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'batch-account',
                        displayName: 'Batch Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/batch-account.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/batch/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/batch/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/batch/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-services-classic',
                        displayName: 'Cloud Services (classic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/cloud-services-classic.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'disk-managed',
                        displayName: 'Disk (Managed)',
                        synonyms: [
                            'hard drive',
                            'hdd',
                            'ssd',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/disk.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machines/windows/managed-disks-overview',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/managed-disks/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/managed-disks/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'disk-encryption-set',
                        displayName: 'Disk Encryption Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/disk-encryption-set.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'disk-snapshot',
                        displayName: 'Disk Snapshot',
                        synonyms: [
                            'hard drive',
                            'hdd',
                            'ssd',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/disk-snapshot.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'function-app',
                        displayName: 'Function App',
                        synonyms: [
                            'serverless'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/function-app.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-functions/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/functions/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/functions/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-definition',
                        displayName: 'Image Definition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/image-definition.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-version',
                        displayName: 'Image Version',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/image-version.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'proximity-placement-group',
                        displayName: 'Proximity Placement Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/proximity-placement-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'shared-image-gallery',
                        displayName: 'Shared Image Gallery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/shared-image-gallery.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux/shared-image-galleries',
                            'Pricing Details': 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux/shared-image-galleries#billing',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine',
                        displayName: 'Virtual Machine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/virtual-machines/v1_9/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-classic',
                        displayName: 'Virtual Machine (classic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-classic.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-image',
                        displayName: 'Virtual Machine Image',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-image.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-image-classic',
                        displayName: 'Virtual Machine Image (classic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-image-classic.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-linux',
                        displayName: 'Virtual Machine (Linux)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-linux.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machines/linux/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/virtual-machines/v1_9/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-windows',
                        displayName: 'Virtual Machine (Windows)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-windows.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machines/windows',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-machines/windows/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/virtual-machines/v1_9/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-scale-set',
                        displayName: 'Virtual Machine Scale Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureCompute}/vm-scale-set.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-machine-scale-sets/linux/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/virtual-machine-scale-sets/v1_1/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure containers

            {
                id: SymbolGroupConstants.AzureContainers,
                displayName: SymbolGroupDisplayNameConstants.AzureContainers,
                tags: [
                    'docker',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-instance',
                        displayName: 'Azure Container Instance (ACI)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureContainers}/container-instance.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/container-instances/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/container-instances/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/container-instances/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-registry',
                        displayName: 'Azure Container Registry (ACR)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureContainers}/container-registry.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/container-registry/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/container-registry/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/container-registry/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kubernetes-service',
                        displayName: 'Azure Kubernetes Service (AKS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureContainers}/kubernetes-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/aks/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/kubernetes-service/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/kubernetes-service/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-fabric-cluster',
                        displayName: 'Service Fabric Cluster',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureContainers}/service-fabric-cluster.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/service-fabric/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/service-fabric/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/service-fabric/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-fabric-mesh',
                        displayName: 'Service Fabric Mesh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureContainers}/service-fabric-mesh.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/service-fabric-mesh/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure database

            {
                id: SymbolGroupConstants.AzureDatabase,
                displayName: SymbolGroupDisplayNameConstants.AzureDatabase,
                tags: [
                    'sql',
                    'db'
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-cache-redis',
                        displayName: 'Azure Cache for Redis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/azure-cache-redis.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cache/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/cache/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-cosmos-db',
                        displayName: 'Azure Cosmos DB',
                        synonyms: [
                            'mongodb',
                            'gremlin',
                            'graph',
                            'cassandra',
                            'column',
                            'columnar',
                            'nosql',
                            'no-sql',
                            'document',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/azure-cosmos-db.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cosmos-db/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cosmos-db/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/cosmos-db/v1_3/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-database-pool',
                        displayName: 'Elastic Database Pool',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/elastic-database-pool.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/${SymbolGroup.Elastic}/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-job-agent',
                        displayName: 'Elastic Job Agent',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/elastic-job-agent.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/${SymbolGroup.Elastic}/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'instance-pool',
                        displayName: 'Instance Pool',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/instance-pool.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-database',
                        displayName: 'Managed Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/managed-database.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/managed-instance/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/managed/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sql-azure-vm',
                        displayName: 'SQL Azure VM',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-azure-vm.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-db-for-mariadb-servers',
                        displayName: 'Azure DB for MariaDB Servers',
                        synonyms: [
                            'mysql'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/azure-db-for-mariadb-servers.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/mariadb/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/mariadb/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/mariadb/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-db-for-mysql-servers',
                        displayName: 'Azure DB for MySQL Servers',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/azure-db-for-mysql-servers.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/mysql/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/mysql/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/mysql/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-db-for-postgresql-servers',
                        displayName: 'Azure DB for PostgreSQL Servers',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/azure-db-for-postgresql-servers.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/postgresql/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/postgresql/server/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/postgresql/v1_1/',
                        },
                    },
                    // @todo: this is not rendering correctly, so commented out for now.
                    // {
                    //     id: 'azure-cache-for-redis',
                    //     displayName: 'Azure Cache for Redis',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.Azure}/${SymbolGroup.AzureDatabase}/azure-cache-for-redis.svg`
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sql-database',
                        displayName: 'SQL Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-database.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/single/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'sql dw',
                            'sqldw',
                        ],
                        id: 'sql-data-warehouse',
                        displayName: 'SQL Data Warehouse (Synapse Analytics)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-data-warehouse.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/synapse-analytics/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/synapse-analytics/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sql-managed-instance',
                        displayName: 'SQL Managed Instance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-managed-instance.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/managed-instance/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/managed/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sql-server',
                        displayName: 'SQL Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-server.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-sql/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-database/single/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-database/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sql-server-stretch-database',
                        displayName: 'SQL Server Stretch Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/sql-server-stretch-database.svg`,
                        docs: {
                            'Official Documentation': 'https://azure.microsoft.com/en-us/services/sql-server-stretch-database/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/sql-server-stretch-database/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/sql-server-stretch-database/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-cluster',
                        displayName: 'Virtual Cluster',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDatabase}/virtual-cluster.svg`
                    },
                ],
            },

            //#endregion

            //#region azure devops

            {
                id: SymbolGroupConstants.AzureDevOps,
                displayName: SymbolGroupDisplayNameConstants.AzureDevOps,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-artifact',
                        displayName: 'Azure Artifact',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-artifact.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/artifacts/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-board',
                        displayName: 'Azure Board',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-board.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/boards/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-devops',
                        displayName: 'Azure DevOps',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-devops.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-pipeline',
                        displayName: 'Azure Pipeline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-pipeline.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-repo',
                        displayName: 'Azure Repo',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-repo.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/repos/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-test-plan',
                        displayName: 'Azure Test Plan',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/azure-test-plan.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devops/test/?view=azure-devops',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureDevOps}/v2_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'devtest-lab',
                        displayName: 'DevTest Lab',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/devtest-lab.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/devtest-labs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/devtest-lab/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/devtest-lab/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lab-services',
                        displayName: 'Lab Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureDevOps}/lab-services.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/lab-services/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/lab-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/lab-services/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure governance

            {
                id: SymbolGroupConstants.AzureGovernance,
                displayName: SymbolGroupDisplayNameConstants.AzureGovernance,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'advisor',
                        displayName: 'Advisor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/advisor.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/advisor/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/advisor/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/advisor/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'arc',
                        displayName: 'Arc',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/arc.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-arc/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'runbook'
                        ],
                        id: 'automation-account',
                        displayName: 'Automation Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/automation-account.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/automation/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/automation/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/automation/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blueprint',
                        displayName: 'Blueprint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/blueprint.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/governance/blueprints/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/blueprints/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-alert',
                        displayName: 'Cost Alert',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/cost-alert.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cost-management/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-analysis',
                        displayName: 'Cost Analysis',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/cost-analysis.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cost-management/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-budgets',
                        displayName: 'Cost Budgets',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/cost-budgets.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cost-management/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cost-management-billing',
                        displayName: 'Cost Management + Billing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/cost-management-billing.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cost-management/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lighthouse',
                        displayName: 'Lighthouse',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/lighthouse.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/lighthouse/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-applications-center',
                        displayName: 'Managed Applications Center',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/managed-applications-center.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/managed-applications/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/managed-applications/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'management-group',
                        displayName: 'Management Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/management-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'policy',
                        displayName: 'Policy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/policy.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/governance/policy/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-policy/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-policy/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-graph-explorer',
                        displayName: 'Resource Graph Explorer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureGovernance}/resource-graph-explorer.svg`
                    },
                ],
            },

            //#endregion

            //#region azure identity

            {
                id: SymbolGroupConstants.AzureIdentity,
                displayName: SymbolGroupDisplayNameConstants.AzureIdentity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad',
                        displayName: 'Azure AD (Active Directory)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-b2c',
                        displayName: 'Azure AD B2C',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-b2c.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory-b2c/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory-b2c/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory-b2c/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-conditional-access',
                        displayName: 'Azure AD Conditional Access',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-conditional-access.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-connect-health',
                        displayName: 'Azure AD Connect Health',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-connect-health.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-domain-services',
                        displayName: 'Azure AD Domain Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-domain-services.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory-domain-services/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory-ds/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory-ds/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-information-protection',
                        displayName: 'Azure AD Information Protection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-information-protection.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/information-protection/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/information-protection/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/information-protection/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'aad-privileged-identity-management',
                        displayName: 'Azure AD Privileged Identity Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/aad-privileged-identity-management.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-registration',
                        displayName: 'App Registration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/app-registration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-application',
                        displayName: 'Enterprise Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/enterprise-application.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'identity-governance',
                        displayName: 'Identity Governance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/identity-governance.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/active-directory/governance/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/active-directory/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/active-directory/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'managed-identity',
                        displayName: 'Managed Identity',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/managed-identity.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'multi-tenancy',
                        displayName: 'Multi Tenancy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIdentity}/multi-tenancy.svg`
                    },
                ],
            },

            //#endregion

            //#region azure integration

            {
                id: SymbolGroupConstants.AzureIntegration,
                displayName: SymbolGroupDisplayNameConstants.AzureIntegration,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-connection',
                        displayName: 'API Connection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/api-connection.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/connectors/apis-list',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/logic-apps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/logic-apps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-management-service',
                        displayName: 'API Management Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/api-management-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/api-management/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/api-management/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/api-management/v1_3/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-configuration',
                        displayName: 'App Configuration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/app-configuration.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-app-configuration/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/app-configuration/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/app-configuration/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-api-for-fhir',
                        displayName: 'Azure API for FHIR',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/azure-api-for-fhir.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/healthcare-apis/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-api-for-fhir/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-api-for-fhir/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-grid-domain',
                        displayName: 'Event Grid Domain',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/event-grid-domain.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/event-grid/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/event-grid/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/event-grid/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-grid-subscription',
                        displayName: 'Event Grid Subscription',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/event-grid-subscription.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/event-grid/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/event-grid/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/event-grid/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-grid-topic',
                        displayName: 'Event Grid Topic',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/event-grid-topic.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/event-grid/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/event-grid/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/event-grid/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'integration-account',
                        displayName: 'Integration Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/integration-account.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-create-integration-account',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/logic-apps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/logic-apps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'integration-service-environment',
                        displayName: 'Integration Service Environment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/integration-service-environment.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/logic-apps/connect-virtual-network-vnet-isolated-environment',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/logic-apps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/logic-apps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logic-app-custom-connector',
                        displayName: 'Logic App Custom Connector',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/logic-app-custom-connector.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/connectors/custom-connectors/create-logic-apps-connector',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/logic-apps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/logic-apps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logic-app',
                        displayName: 'Logic App',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/logic-app.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/logic-apps/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/logic-apps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/logic-apps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sendgrid-account',
                        displayName: 'SendGrid Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/sendgrid-account.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-bus-relay',
                        displayName: 'Service Bus Relay',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/service-bus-relay.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-relay/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/service-bus/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/service-bus/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-bus',
                        displayName: 'Service Bus',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIntegration}/service-bus.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/service-bus-messaging/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/service-bus/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/service-bus/v1_1/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure IOT

            {
                id: SymbolGroupConstants.AzureIOT,
                displayName: SymbolGroupDisplayNameConstants.AzureIOT,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-map',
                        displayName: 'Azure Map',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/azure-map.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-maps/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-maps/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-maps/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-sphere',
                        displayName: 'Azure Sphere',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/azure-sphere.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure-sphere/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-sphere/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-sphere/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-provisioning-service',
                        displayName: 'Device Provisioning Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/device-provisioning-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'digital-twin',
                        displayName: 'Digital Twin',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/digital-twin.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/digital-twins/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/digital-twins/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-hub-cluster',
                        displayName: 'Event Hub Cluster',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/event-hub-cluster.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/event-hubs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/event-hubs/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/event-hubs/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-hub',
                        displayName: 'Event Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/event-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/event-hubs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/event-hubs/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/event-hubs/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-central-application',
                        displayName: 'IOT Central Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/iot-central-application.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/iot-central/core/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/iot-central/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/iot-central/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-hub',
                        displayName: 'IOT Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/iot-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/iot-hub/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/iot-hub/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/iot-hub/v1_2/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'notification-hub',
                        displayName: 'Notification Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/notification-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/notification-hubs/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/notification-hubs/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/notification-hubs/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'time-series-insights-environment',
                        displayName: 'Time Series Insights Environment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/time-series-insights-environment.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/time-series-insights/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/time-series-insights/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/time-series-insights/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'time-series-insights-event-source',
                        displayName: 'Time Series Insights Event Source',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/time-series-insights-event-source.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/time-series-insights/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/time-series-insights/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/time-series-insights/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'win10-iot-core-service',
                        displayName: 'Windows 10 IOT Core Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureIOT}/win10-iot-core-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/windows-hardware/manufacture/iot/iotcoreservicesoverview',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/windows-10-iot-core/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/windows-10-iot-core/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure migrate

            {
                id: SymbolGroupConstants.AzureMigrate,
                displayName: SymbolGroupDisplayNameConstants.AzureMigrate,
                symbols: [
                    // @todo: this is not rendering correctly, so commented out for now
                    // {
                    //     id: 'azure-database-migration-service',
                    //     displayName: 'Azure Database Migration Service',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.Azure}/${SymbolGroup.AzureMigrate}/azure-database-migration-service.svg`
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-migrate-project',
                        displayName: 'Azure Migrate Project',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/azure-migrate-project.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/migrate/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/${SymbolGroup.AzureMigrate}/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/${SymbolGroup.AzureMigrate}/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-box-edge',
                        displayName: 'Data Box Edge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/data-box-edge.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-box-edge-gateway',
                        displayName: 'Data Box Edge (Gateway)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/data-box-edge-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-box',
                        displayName: 'Data Box',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/data-box.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/databox/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/databox/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'recovery-services-vault',
                        displayName: 'Recovery Services Vault',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/recovery-services-vault.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/backup/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/backup/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/backup/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stack-edge',
                        displayName: 'Stack Edge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMigrate}/stack-edge.svg`
                    },
                ],
            },

            //#endregion

            //#region azure machine learning

            {
                id: SymbolGroupConstants.AzureML,
                displayName: SymbolGroupDisplayNameConstants.AzureML,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'batch-ai',
                        displayName: 'Batch AI',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/batch-ai.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bot-service',
                        displayName: 'Bot Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/bot-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/bot-service/?view=azure-bot-service-4.0',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/bot-service/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/bot-service/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cognitive-search',
                        displayName: 'Cognitive Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/cognitive-search.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/search/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/search/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/search/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cognitive-service',
                        displayName: 'Cognitive Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/cognitive-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cognitive-services/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/search/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'genomics-account',
                        displayName: 'Genomics Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/genomics-account.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/genomics/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/genomics/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/genomics/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'machine-learning-workspace',
                        displayName: 'Machine Learning Workspace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureML}/machine-learning-workspace.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/machine-learning/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/machine-learning/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/machine-learning-service/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure monitor

            {
                id: SymbolGroupConstants.AzureMonitor,
                displayName: SymbolGroupDisplayNameConstants.AzureMonitor,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'activity-log',
                        displayName: 'Activity Log',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/activity-log.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'alerts',
                        displayName: 'Alerts',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/alerts.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-insights',
                        displayName: 'Application Insights',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/application-insights.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'diagnostic-settings',
                        displayName: 'Diagnostic Settings',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/diagnostic-settings.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'log-analytics-workspace',
                        displayName: 'Log Analytics Workspace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/log-analytics-workspace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'log-streaming',
                        displayName: 'Log Streaming',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/log-streaming.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'metrics',
                        displayName: 'Metrics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/metrics.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'operation-log',
                        displayName: 'Operation Log',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/operation-log.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-monitor',
                        displayName: 'Azure Monitor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/azure-monitor.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-monitor/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/monitor/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/monitor/v1_3/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-health',
                        displayName: 'Service Health',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/service-health.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workbooks',
                        displayName: 'Workbooks',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureMonitor}/workbooks.svg`
                    },
                ],
            },

            //#endregion

            //#region azure network

            {
                id: SymbolGroupConstants.AzureNetwork,
                displayName: SymbolGroupDisplayNameConstants.AzureNetwork,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-gateway',
                        displayName: 'Application Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/application-gateway.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/application-gateway/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/application-gateway/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/application-gateway/v1_2/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-security-group',
                        displayName: 'Application Security Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/application-security-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cdn-profile',
                        displayName: 'CDN Profile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/cdn-profile.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/cdn/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/cdn/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/cdn/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'connection',
                        displayName: 'Connection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/connection.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ddos-protection',
                        displayName: 'DDOS Protection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/ddos-protection.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-network/ddos-protection-overview',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/ddos-protection/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/ddos-protection/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dns-private-zone',
                        displayName: 'DNS Private Zone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/dns-private-zone.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/dns/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/dns/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/dns/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dns-zone',
                        displayName: 'DNS Zone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/dns-zone.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/dns/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/dns/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/dns/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'expressroute-circuit',
                        displayName: 'ExpressRoute Circuit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/expressroute-circuit.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/expressroute/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/expressroute/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/expressroute/v1_3/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-firewall',
                        displayName: 'Azure Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/azure-firewall.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/firewall/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-firewall/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-firewall/v1_1/',
                        },
                    },
                    // @todo: the following is not rendering correctly (because of ad-blocker extensions), so commented out for now.
                    // {
                    //     kind: 'NativeModel',
                    //     modelKind: 'NodeModel',
                    //     id: 'azure-firewall-manager',
                    //     displayName: 'Azure Firewall Manager',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.Azure}/${SymbolGroup.AzureNetwork}/azure-firewall-manager.svg`,
                    //     docs: {
                    //         'Official Documentation': 'https://docs.microsoft.com/en-us/azure/firewall-manager/',
                    //         'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/firewall-manager/',
                    //         'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/firewall-manager/v1_0/',
                    //     },
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'front-door',
                        displayName: 'Front Door',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/front-door.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/frontdoor/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/frontdoor/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/frontdoor/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ip-groups',
                        displayName: 'IP Groups',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/ip-groups.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'load-balancer',
                        displayName: 'Load Balancer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/load-balancer.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/load-balancer/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/load-balancer/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/load-balancer/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'local-network-gateway',
                        displayName: 'Local Network Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/local-network-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-address-translation',
                        displayName: 'Network Address Translation (NAT)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/network-address-translation.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-interface',
                        displayName: 'Network Interface',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/network-interface.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-security-group-classic',
                        displayName: 'Network Security Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/network-security-group-classic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-watcher',
                        displayName: 'Network Watcher',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/network-watcher.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/network-watcher/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/network-watcher/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/network-watcher/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'on-premises-data-gateway',
                        displayName: 'On-Premises Data Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/on-premises-data-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'public-ip-address',
                        displayName: 'Public IP Address',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/public-ip-address.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'public-ip-prefixes',
                        displayName: 'Public IP Prefixes',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/public-ip-prefixes.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'reserved-ip-address-classic',
                        displayName: 'Reserved IP Address',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/reserved-ip-address-classic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'route-filter',
                        displayName: 'Route Filter',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/route-filter.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'route-table',
                        displayName: 'Route Table',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/route-table.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-endpoint-policy',
                        displayName: 'Service Endpoint Policy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/service-endpoint-policy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'traffic-manager-profile',
                        displayName: 'Traffic Manager Profile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/traffic-manager-profile.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/traffic-manager/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/traffic-manager/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/traffic-manager/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-network',
                        displayName: 'Virtual Network (VNET)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/virtual-network.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-network/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-network/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-network-gateway',
                        displayName: 'Virtual Network Gateway',
                        synonyms: [
                            'vpn',
                            'vpn gateway',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/virtual-network-gateway.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/vpn-gateway/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/vpn-gateway/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/vpn-gateway/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-wan',
                        displayName: 'virtual WAN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/virtual-wan.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/virtual-wan/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/virtual-wan/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/virtual-wan/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-app-firewall',
                        displayName: 'Web App Firewall (WAF)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureNetwork}/web-app-firewall.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/web-application-firewall/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/web-application-firewall/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/web-application-firewall/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure resource manager

            {
                id: SymbolGroupConstants.AzureRM,
                displayName: SymbolGroupDisplayNameConstants.AzureRM,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource',
                        displayName: 'Resource',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/resource.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-explorer',
                        displayName: 'Resource Explorer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/resource-explorer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-group',
                        displayName: 'Resource Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/resource-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'subscription',
                        displayName: 'Subscription',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/subscription.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tag',
                        displayName: 'Tag',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/tag.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tags',
                        displayName: 'Tags',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/tags.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'template',
                        displayName: 'Template',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureRM}/template.svg`
                    },
                ],
            },

            //#endregion

            //#region azure security

            {
                id: SymbolGroupConstants.AzureSecurity,
                displayName: SymbolGroupDisplayNameConstants.AzureSecurity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-vault',
                        displayName: 'Key Vault',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureSecurity}/key-vault.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/key-vault/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/key-vault/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/key-vault/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-center',
                        displayName: 'Security Center',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureSecurity}/security-center.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/security-center/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/security-center/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/security-center/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sentinel',
                        displayName: 'Sentinel',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureSecurity}/sentinel.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/sentinel/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/azure-sentinel/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/azure-sentinel/v1_0/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure storage

            {
                id: SymbolGroupConstants.AzureStorage,
                displayName: SymbolGroupDisplayNameConstants.AzureStorage,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blob-storage',
                        displayName: 'Blob Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/blob-storage.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storage/blobs/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storage/v1_5/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-lake-storage-gen1',
                        displayName: 'Data Lake Storage (Gen1)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/data-lake-storage-gen1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-share',
                        displayName: 'Data Share',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/data-share.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/data-share/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/data-share/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/data-share/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-share-invitation',
                        displayName: 'Data Share Invitation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/data-share-invitation.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'import-export-job',
                        displayName: 'Import Export Job',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/import-export-job.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'private-link',
                        displayName: 'Private Link',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/private-link.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/private-link/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/private-link/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/private-link/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'private-link-hub',
                        displayName: 'Private Link Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/private-link-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/private-link/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/private-link/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/private-link/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'private-link-service',
                        displayName: 'Private Link Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/private-link-service.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/private-link/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/private-link/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/private-link/v1_0/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'azure-netapp-file',
                        displayName: 'Azure NetApp File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/azure-netapp-file.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/azure-netapp-files/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/netapp/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/netapp/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'queue-storage',
                        displayName: 'Queue Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/queue-storage.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storage/queues/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storage/queues/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storage/v1_5/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-account',
                        displayName: 'Storage Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-account.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storage',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storage/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storage/v1_5/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-account-classic',
                        displayName: 'Storage Account (classic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-account-classic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-blob-block',
                        displayName: 'Storage Blob (Block)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-blob-block.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-blob-page',
                        displayName: 'Storage Blob (Page)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-blob-page.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-container',
                        displayName: 'Storage Container',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-container.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-explorer',
                        displayName: 'Storage Explorer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-explorer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-file',
                        displayName: 'Storage File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-sync-services',
                        displayName: 'Storage Sync Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storage-sync-services.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storsimple-data-manager',
                        displayName: 'StorSimple Data Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storsimple-data-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storsimple/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storsimple/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storsimple/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storsimple-device-manager',
                        displayName: 'StorSimple Device Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/storsimple-device-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storsimple/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storsimple/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storsimple/v1_1/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'table-storage',
                        displayName: 'Table Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureStorage}/table-storage.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.microsoft.com/en-us/azure/storage/tables/',
                            'Pricing Details': 'https://azure.microsoft.com/en-us/pricing/details/storage/tables/',
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/storage/v1_5/',
                        },
                    },
                ],
            },

            //#endregion

            //#region azure web

            {
                id: SymbolGroupConstants.AzureWeb,
                displayName: SymbolGroupDisplayNameConstants.AzureWeb,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-service-certificate',
                        displayName: 'App Service Certificate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/app-service-certificate.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-service-domain',
                        displayName: 'App Service Domain',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/app-service-domain.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-service-environment',
                        displayName: 'App Service Environment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/app-service-environment.svg`,
                        docs: {
                            'Official Documentation': `https://docs.microsoft.com/en-us/azure/app-service/environment/intro`,
                            'Pricing Details': `https://azure.microsoft.com/en-us/pricing/details/app-service/linux/`,
                            'SLA': 'https://azure.microsoft.com/en-us/support/legal/sla/app-service/v1_4/',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-service-plan',
                        displayName: 'App Service Plan',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/app-service-plan.svg`,
                        docs: {
                            'Official Documentation': `https://docs.microsoft.com/en-us/azure/app-service/`,
                            'Pricing Details': `https://azure.microsoft.com/en-us/pricing/details/app-service/linux/`,
                            'SLA': `https://azure.microsoft.com/en-us/support/legal/sla/app-service/v1_4/`,
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-service',
                        displayName: 'App Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/app-service.svg`,
                        docs: {
                            'Official Documentation': `https://docs.microsoft.com/en-us/azure/app-service/`,
                            'Pricing Details': `https://azure.microsoft.com/en-us/pricing/details/app-service/linux/`,
                            'SLA': `https://azure.microsoft.com/en-us/support/legal/sla/app-service/v1_4/`,
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'media-service',
                        displayName: 'Media Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/media-service.svg`,
                        docs: {
                            'Official Documentation': `https://docs.microsoft.com/en-us/azure/media-services/latest/`,
                            'Pricing Details': `https://azure.microsoft.com/en-us/pricing/details/media-services/`,
                            'SLA': `https://azure.microsoft.com/en-us/support/legal/sla/media-services/v1_2/`,
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'signal-r',
                        displayName: 'SignalR',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.AzureWeb}/signal-r.svg`,
                        docs: {
                            'Official Documentation': `https://docs.microsoft.com/en-us/azure/azure-signalr/`,
                            'Pricing Details': `https://azure.microsoft.com/en-us/pricing/details/signalr-service/`,
                            'SLA': `https://azure.microsoft.com/en-us/support/legal/sla/signalr-service/v1_0/`,
                        },
                    },
                ],
            },

            //#endregion

            //#region microsoft intune

            {
                id: SymbolGroupConstants.MicrosoftIntune,
                displayName: SymbolGroupDisplayNameConstants.MicrosoftIntune,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'client-app',
                        displayName: 'Client App',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/client-app.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-compliance',
                        displayName: 'Device Compliance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/device-compliance.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-configuration',
                        displayName: 'Device Configuration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/device-configuration.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-enrollment',
                        displayName: 'Device Enrollment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/device-enrollment.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-group',
                        displayName: 'Device Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/device-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'microsoft-intune',
                        displayName: 'Microsoft Intune',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/microsoft-intune.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-baseline',
                        displayName: 'Security Baseline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/security-baseline.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'software-update',
                        displayName: 'Software Update',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/software-update.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tenant-status',
                        displayName: 'Tenant Status',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Azure}/${SymbolGroupConstants.MicrosoftIntune}/tenant-status.svg`
                    },
                ],
            },

            //#endregion

        ],
    },

    //#endregion AZURE

    //#region GCP

    {
        id: SymbolFamilyConstants.GCP,
        displayName: 'GCP',
        SymbolGroups: [

            //#region gcp api management

            {
                id: SymbolGroupConstants.GCPAPIManagement,
                displayName: SymbolGroupDisplayNameConstants.GCPAPIManagement,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    // @todo: the following is not rendering correctly (because of ad-blocker extensions), so commented out for now.
                    // {
                    //     id: 'api-analytics',
                    //     displayName: 'API Analytics',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.GCP}/${SymbolGroup.GCPAPIManagement}/api-analytics.svg`,
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-monetization',
                        displayName: 'API Monetization',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPAPIManagement}/api-monetization.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apigee-api-platform',
                        displayName: 'Apigee API Platform',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPAPIManagement}/apigee-api-platform.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.apigee.com/api-platform/get-started/get-started',
                            'Pricing Details': 'https://cloud.google.com/apigee/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apigee-sense',
                        displayName: 'Apigee Sense',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPAPIManagement}/apigee-sense.svg`,
                        docs: {
                            'Official Documentation': 'https://docs.apigee.com/sense/what-apigee-sense',
                            'Pricing Details': 'https://cloud.google.com/apigee/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-endpoints',
                        displayName: 'Cloud Endpoints',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPAPIManagement}/cloud-endpoints.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/endpoints/docs',
                            'Pricing Details': 'https://cloud.google.com/endpoints/pricing-and-quotas',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'developer-portal',
                        displayName: 'Developer Portal',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPAPIManagement}/developer-portal.svg`,
                    },

                ],
            },

            //#endregion

            //#region gcp compute

            {
                id: SymbolGroupConstants.GCPCompute,
                displayName: SymbolGroupDisplayNameConstants.GCPCompute,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-engine',
                        displayName: 'App Engine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/app-engine.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/appengine/docs',
                            'Pricing Details': 'https://cloud.google.com/appengine/pricing',
                            'SLA': 'https://cloud.google.com/appengine/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-functions',
                        displayName: 'Cloud Functions',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/cloud-functions.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/functions/docs',
                            'Pricing Details': 'https://cloud.google.com/functions/pricing',
                            'SLA': 'https://cloud.google.com/functions/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-run',
                        displayName: 'Cloud Run',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/cloud-run.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/run/docs',
                            'Pricing Details': 'https://cloud.google.com/run/pricing',
                            'SLA': 'https://cloud.google.com/run/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'compute-engine',
                        displayName: 'Compute Engine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/compute-engine.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/compute/docs',
                            'Pricing Details': 'https://cloud.google.com/compute/all-pricing',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-optimized-os',
                        displayName: 'Container Optimized OS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/container-optimized-os.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/container-optimized-os/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'anthos',
                        ],
                        id: 'gke-on-prem',
                        displayName: 'GKE On-Prem',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/gke-on-prem.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/anthos/gke/docs/on-prem',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gpu',
                        displayName: 'GPU',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/gpu.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/compute/docs/gpus',
                            'Pricing Details': 'https://cloud.google.com/compute/gpus-pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kubernetes-engine',
                        displayName: 'Kubernetes Engine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPCompute}/kubernetes-engine.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/kubernetes-engine/docs',
                            'Pricing Details': 'https://cloud.google.com/kubernetes-engine/pricing',
                            'SLA': 'https://cloud.google.com/kubernetes-engine/sla',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp data analytics

            {
                id: SymbolGroupConstants.GCPDataAnalytics,
                displayName: SymbolGroupDisplayNameConstants.GCPDataAnalytics,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bigquery',
                        displayName: 'BigQuery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/bigquery.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/bigquery/docs',
                            'Pricing Details': 'https://cloud.google.com/bigquery/pricing',
                            'SLA': 'https://cloud.google.com/bigquery/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-composer',
                        displayName: 'Cloud Composer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-composer.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/composer/docs',
                            'Pricing Details': 'https://cloud.google.com/composer/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-data-catalog',
                        displayName: 'Cloud Data Catalog',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-data-catalog.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/data-catalog/docs',
                            'Pricing Details': 'https://cloud.google.com/data-catalog/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-data-fusion',
                        displayName: 'Cloud Data Fusion',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-data-fusion.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/data-fusion/docs',
                            'Pricing Details': 'https://cloud.google.com/data-fusion/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-dataflow',
                        displayName: 'Cloud Dataflow',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-dataflow.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/dataflow/docs',
                            'Pricing Details': 'https://cloud.google.com/dataflow/pricing',
                            'SLA': 'https://cloud.google.com/dataflow/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-datalab',
                        displayName: 'Cloud Datalab',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-datalab.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/datalab/docs',
                            'Pricing Details': 'https://cloud.google.com/datalab/docs/resources/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-dataprep',
                        displayName: 'Cloud Dataprep',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-dataprep.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/dataprep/docs',
                            'Pricing Details': 'https://cloud.google.com/dataprep/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-dataproc',
                        displayName: 'Cloud Dataproc',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-dataproc.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/dataproc/docs',
                            'Pricing Details': 'https://cloud.google.com/dataproc/pricing',
                            'SLA': 'https://cloud.google.com/dataproc/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-pubsub',
                        displayName: 'Cloud PubSub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/cloud-pubsub.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/pubsub/docs',
                            'Pricing Details': 'https://cloud.google.com/pubsub/pricing',
                            'SLA': 'https://cloud.google.com/pubsub/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'life sciences',
                        ],
                        id: 'genomics',
                        displayName: 'Genomics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDataAnalytics}/genomics.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/life-sciences/docs',
                            'Pricing Details': 'https://cloud.google.com/life-sciences/pricing',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp databases

            {
                id: SymbolGroupConstants.GCPDatabases,
                displayName: SymbolGroupDisplayNameConstants.GCPDatabases,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-bigtable',
                        displayName: 'Cloud Bigtable',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-bigtable.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/bigtable/docs',
                            'Pricing Details': 'https://cloud.google.com/bigtable/pricing',
                            'SLA': 'https://cloud.google.com/bigtable/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'firestore',
                        ],
                        id: 'cloud-datastore',
                        displayName: 'Cloud Datastore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-datastore.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/datastore/docs',
                            'Pricing Details': 'https://cloud.google.com/datastore/pricing',
                            'SLA': 'https://cloud.google.com/datastore/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-firestore',
                        displayName: 'Cloud Firestore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-firestore.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/firestore/docs',
                            'Pricing Details': 'https://cloud.google.com/firestore/pricing',
                            'SLA': 'https://cloud.google.com/firestore/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-memorystore',
                        displayName: 'Cloud Memorystore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-memorystore.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/memorystore/docs',
                            'Pricing Details (redis)': 'https://cloud.google.com/memorystore/docs/redis/pricing',
                            'Pricing Details (memcached)': 'https://cloud.google.com/memorystore/docs/memcached/pricing',
                            'SLA': 'https://cloud.google.com/memorystore/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-spanner',
                        displayName: 'Cloud Spanner',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-spanner.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/spanner/docs',
                            'Pricing Details': 'https://cloud.google.com/spanner/pricing',
                            'SLA': 'https://cloud.google.com/spanner/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-sql',
                        displayName: 'Cloud SQL',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDatabases}/cloud-sql.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/sql/docs',
                            'Pricing Details': 'https://cloud.google.com/sql/pricing',
                            'SLA': 'https://cloud.google.com/sql/sla',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp developer tools

            {
                id: SymbolGroupConstants.GCPDeveloperTools,
                displayName: SymbolGroupDisplayNameConstants.GCPDeveloperTools,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-build',
                        displayName: 'Cloud Build',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-build.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/cloud-build/docs',
                            'Pricing Details': 'https://cloud.google.com/cloud-build/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-code-for-intellij',
                        displayName: 'Cloud Code for IntelliJ',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-code-for-intellij.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-code',
                        displayName: 'Cloud Code',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-code.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-scheduler',
                        displayName: 'Cloud Scheduler',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-scheduler.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/scheduler/docs',
                            'Pricing Details': 'https://cloud.google.com/scheduler/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-sdk',
                        displayName: 'Cloud SDK',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-sdk.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-source-repositories',
                        displayName: 'Cloud Source Repositories',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-source-repositories.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/source-repositories/docs',
                            'Pricing Details': 'https://cloud.google.com/source-repositories/pricing',
                        },
                    },
                    // @todo: this is not rendering correctly, so commented out for now.
                    // {
                    //     id: 'cloud-tasks',
                    //     displayName: 'Cloud Tasks',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.GCP}/${SymbolGroup.GCPDeveloperTools}/cloud-tasks.svg`,
                    // },
                    // {
                    //     id: 'cloud-test-lab',
                    //     displayName: 'Cloud Test Lab',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.GCP}/${SymbolGroup.GCPDeveloperTools}/cloud-test-lab.svg`,
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-tools-for-eclipse',
                        displayName: 'Cloud Tools for Eclipse',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-tools-for-eclipse.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-tools-for-powershell',
                        displayName: 'Cloud Tools for PowerShell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-tools-for-powershell.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-tools-for-visual-studio',
                        displayName: 'Cloud Tools for Visual Studio',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/cloud-tools-for-visual-studio.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container-registry',
                        displayName: 'Container Registry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/container-registry.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/container-registry/docs',
                            'Pricing Details': 'https://cloud.google.com/container-registry/pricing',
                            'SLA': 'https://cloud.google.com/container-registry/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gradle-app-engine-plugin',
                        displayName: 'Gradle App Engine Plugin',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/gradle-app-engine-plugin.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ide-plugins',
                        displayName: 'IDE plugins',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/ide-plugins.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'maven-app-engine-plugin',
                        displayName: 'Maven App Engine Plugin',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPDeveloperTools}/maven-app-engine-plugin.svg`,
                    },
                ],
            },

            //#endregion

            //#region gcp iot

            {
                id: SymbolGroupConstants.GCPIOT,
                displayName: SymbolGroupDisplayNameConstants.GCPIOT,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-iot-core',
                        displayName: 'Cloud IOT Core',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPIOT}/cloud-iot-core.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/iot/docs/',
                            'Pricing Details': 'https://cloud.google.com/iot/pricing',
                            'SLA': 'https://cloud.google.com/iot/sla',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp management tools

            {
                id: SymbolGroupConstants.GCPManagementTools,
                displayName: SymbolGroupDisplayNameConstants.GCPManagementTools,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-apis',
                        displayName: 'Cloud APIs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-apis.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-billing-api',
                        displayName: 'Cloud Billing API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-billing-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/billing/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-console',
                        displayName: 'Cloud Console',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-console.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-deployment-manager',
                        displayName: 'Cloud Deployment Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-deployment-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/deployment-manager/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-mobile-app',
                        displayName: 'Cloud Mobile App',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-mobile-app.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'anthos'
                        ],
                        id: 'cloud-service-mesh',
                        displayName: 'Cloud Service Mesh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-service-mesh.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/service-mesh/docs',
                            'Pricing Details': 'https://cloud.google.com/service-mesh/docs/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-shell',
                        displayName: 'Cloud Shell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/cloud-shell.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'debugger',
                        displayName: 'Debugger',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/debugger.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/debugger/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'error-reporting',
                        displayName: 'Error Reporting',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/error-reporting.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/error-reporting/docs/',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logging',
                        displayName: 'Logging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/logging.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/logging/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'monitoring',
                        displayName: 'Monitoring',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/monitoring.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/monitoring/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'profiler',
                        displayName: 'Profiler',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/profiler.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/profiler/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stackdriver',
                        displayName: 'Stackdriver',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/stackdriver.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/stackdriver/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'trace',
                        displayName: 'Trace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPManagementTools}/trace.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/trace/docs',
                            'Pricing Details': 'https://cloud.google.com/stackdriver/pricing',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp migration

            {
                id: SymbolGroupConstants.GCPMigration,
                displayName: SymbolGroupDisplayNameConstants.GCPMigration,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transfer-appliance',
                        displayName: 'Transfer Appliance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPMigration}/transfer-appliance.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/transfer-appliance/docs/',
                            'Pricing Details': 'https://cloud.google.com/transfer-appliance/docs/2.0/pricing',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp machine learning

            {
                id: SymbolGroupConstants.GCPML,
                displayName: SymbolGroupDisplayNameConstants.GCPML,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'advanced-solutions-lab',
                        displayName: 'Advanced Solutions Lab',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/advanced-solutions-lab.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/asl',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ai-hub',
                        displayName: 'AI Hub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/ai-hub.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/ai-hub/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ai-platform-data-labeling-service',
                        displayName: 'AI Platform Data Labeling Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/ai-platform-data-labeling-service.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/ai-platform/data-labeling/docs',
                            'Pricing Details': 'https://cloud.google.com/ai-platform/data-labeling/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ai-platform',
                        displayName: 'AI Platform',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/ai-platform.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/ai-platform/docs',
                            'Pricing Details': 'https://cloud.google.com/ai-platform/training/pricing',
                            'SLA': 'https://cloud.google.com/ai-platform/training-and-prediction/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automl-natural-language',
                        displayName: 'AutoML Natural Language',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/automl-natural-language.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/natural-language/automl/docs',
                            'Pricing Details': 'https://cloud.google.com/natural-language/automl/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automl-tables',
                        displayName: 'AutoML Tables',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/automl-tables.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/automl-tables/docs',
                            'Pricing Details': 'https://cloud.google.com/automl-tables/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automl-translation',
                        displayName: 'AutoML Translation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/automl-translation.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/translate/automl/docs',
                            'Pricing Details': 'https://cloud.google.com/translate/automl/pricing',
                            'SLA': 'https://cloud.google.com/translate/automl/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automl-video-intelligence',
                        displayName: 'AutoML Video Intelligence',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/automl-video-intelligence.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/video-intelligence/automl/docs',
                            'Pricing Details': 'https://cloud.google.com/video-intelligence/automl/pricing',
                            'SLA': 'https://cloud.google.com/video-intelligence/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automl-vision',
                        displayName: 'AutoML Vision',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/automl-vision.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vision/automl/docs',
                            'Pricing Details': 'https://cloud.google.com/vision/automl/pricing',
                            'SLA': 'https://cloud.google.com/vision/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-automl',
                        displayName: 'Cloud AutoML',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-automl.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/automl/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-inference-api',
                        displayName: 'Cloud Inference API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-inference-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/inference/docs',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-jobs-api',
                        displayName: 'Cloud Jobs API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-jobs-api.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-natural-language-api',
                        displayName: 'Cloud Natural Language API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-natural-language-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/natural-language/docs',
                            'Pricing Details': 'https://cloud.google.com/natural-language/pricing',
                            'SLA': 'https://cloud.google.com/natural-language/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-speech-to-text',
                        displayName: 'Cloud Speech To Text',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-speech-to-text.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/speech-to-text/docs',
                            'Pricing Details': 'https://cloud.google.com/speech-to-text/pricing',
                            'SLA': 'https://cloud.google.com/speech-to-text/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-text-to-speech',
                        displayName: 'Cloud Text To Speech',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-text-to-speech.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/text-to-speech/docs',
                            'Pricing Details': 'https://cloud.google.com/text-to-speech/pricing',
                            'SLA': 'https://cloud.google.com/text-to-speech/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-tpu',
                        displayName: 'Cloud TPU',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-tpu.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/tpu/docs',
                            'Pricing Details': 'https://cloud.google.com/tpu/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-translation-api',
                        displayName: 'Cloud Translation API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-translation-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/translate/docs',
                            'Pricing Details': 'https://cloud.google.com/translate/pricing',
                            'SLA': 'https://cloud.google.com/translate/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-video-intelligence-api',
                        displayName: 'Cloud Video Intelligence API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-video-intelligence-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/video-intelligence/docs',
                            'Pricing Details': 'https://cloud.google.com/video-intelligence/pricing',
                            'SLA': 'https://cloud.google.com/video-intelligence/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-vision-api',
                        displayName: 'Cloud Vision API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/cloud-vision-api.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vision/docs',
                            'Pricing Details': 'https://cloud.google.com/vision/pricing',
                            'SLA': 'https://cloud.google.com/vision/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dialog-flow-enterprise-edition',
                        displayName: 'Dialogflow Enterprise Edition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPML}/dialog-flow-enterprise-edition.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/dialogflow/docs',
                            'Pricing Details': 'https://cloud.google.com/dialogflow/pricing',
                            'SLA': 'https://cloud.google.com/dialogflow/sla',
                        },
                    },
                    // @todo: this is not rendering correctly, so commented out for now.
                    // {
                    //     id: 'recommendations-ai',
                    //     displayName: 'Recommendations AI',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.GCP}/${SymbolGroup.GCPML}/recommendations-ai.svg`,
                    // },
                ],
            },

            //#endregion

            //#region gcp networking

            {
                id: SymbolGroupConstants.GCPNetworking,
                displayName: SymbolGroupDisplayNameConstants.GCPNetworking,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-armor',
                        displayName: 'Cloud Armor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-armor.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/armor/docs',
                            'Pricing Details': 'https://cloud.google.com/armor/pricing',
                            'SLA': 'https://cloud.google.com/armor/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-cdn',
                        displayName: 'Cloud CDN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-cdn.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/cdn/docs',
                            'Pricing Details': 'https://cloud.google.com/cdn/pricing',
                            'SLA': 'https://cloud.google.com/cdn/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-dns',
                        displayName: 'Cloud DNS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-dns.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/dns/docs',
                            'Pricing Details': 'https://cloud.google.com/dns/pricing',
                            'SLA': 'https://cloud.google.com/dns/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-external-ip-addresses',
                        displayName: 'Cloud External IP Addresses',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-external-ip-addresses.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/compute/docs/ip-addresses',
                            'Pricing Details': 'https://cloud.google.com/compute/all-pricing',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-firewall-rules',
                        displayName: 'Cloud Firewall Rules',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-firewall-rules.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vpc/docs/firewalls',
                            'Pricing Details': 'https://cloud.google.com/compute/network-pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-load-balancing',
                        displayName: 'Cloud Load Balancing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-load-balancing.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/load-balancing/docs',
                            'Pricing Details': 'https://cloud.google.com/compute/network-pricing#lb',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-nat',
                        displayName: 'Cloud NAT',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-nat.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/nat/docs',
                            'Pricing Details': 'https://cloud.google.com/nat/pricing',
                            'SLA': 'https://cloud.google.com/nat/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-network',
                        displayName: 'Cloud Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-network.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vpc/docs',
                            'Pricing Details': 'https://cloud.google.com/compute/network-pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-router',
                        displayName: 'Cloud Router',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-router.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/router/docs',
                            'Pricing Details': 'https://cloud.google.com/router/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-routes',
                        displayName: 'Cloud Routes',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-routes.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vpc/docs/routes',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-vpn',
                        displayName: 'Cloud VPN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/cloud-vpn.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vpn/docs',
                            'Pricing Details': 'https://cloud.google.com/vpn/pricing',
                            'SLA': 'https://cloud.google.com/vpn/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dedicated-interconnect',
                        displayName: 'Dedicated Interconnect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/dedicated-interconnect.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/interconnect/docs',
                            'Pricing Details': 'https://cloud.google.com/interconnect/pricing',
                            'SLA': 'https://cloud.google.com/interconnect/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'partner-interconnect',
                        displayName: 'Partner Interconnect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/partner-interconnect.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/interconnect/docs',
                            'Pricing Details': 'https://cloud.google.com/interconnect/pricing',
                            'SLA': 'https://cloud.google.com/interconnect/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'premium-network-tier',
                        displayName: 'Premium Network Tier',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/premium-network-tier.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/network-tiers/docs',
                            'Pricing Details': 'https://cloud.google.com/network-tiers/pricing',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'standard-network-tier',
                        displayName: 'Standard Network Tier',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/standard-network-tier.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/network-tiers/docs',
                            'Pricing Details': 'https://cloud.google.com/network-tiers/pricing',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'traffic-director',
                        displayName: 'Traffic Director',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/traffic-director.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/traffic-director/docs',
                            'Pricing Details': 'https://cloud.google.com/traffic-director/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-private-cloud',
                        displayName: 'Virtual Private Cloud (VPC)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPNetworking}/virtual-private-cloud.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/vpc/docs',
                            'Pricing Details': 'https://cloud.google.com/compute/network-pricing',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp security

            {
                id: SymbolGroupConstants.GCPSecurity,
                displayName: SymbolGroupDisplayNameConstants.GCPSecurity,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-iam',
                        displayName: 'Cloud IAM',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPSecurity}/cloud-iam.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/iam/docs',
                            'Pricing Details': 'https://cloud.google.com/iam/pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-resource-manager',
                        displayName: 'Cloud Resource Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPSecurity}/cloud-resource-manager.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/resource-manager/docs',
                            'Pricing Details': 'https://cloud.google.com/resource-manager/#pricing',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-security-command-center',
                        displayName: 'Cloud Security Command Center',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPSecurity}/cloud-security-command-center.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/security-command-center/docs',
                            'Pricing Details': 'https://cloud.google.com/security-command-center/pricing',
                            'SLA': 'https://cloud.google.com/security-command-center/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-security-scanner',
                        displayName: 'Cloud Security Scanner',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPSecurity}/cloud-security-scanner.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-management-service',
                        displayName: 'Key Management Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPSecurity}/key-management-service.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/kms/docs',
                            'Pricing Details': 'https://cloud.google.com/kms/pricing',
                            'SLA': 'https://cloud.google.com/kms/sla',
                        },
                    },
                ],
            },

            //#endregion

            //#region gcp storage

            {
                id: SymbolGroupConstants.GCPStorage,
                displayName: SymbolGroupDisplayNameConstants.GCPStorage,
                tags: [
                    'google cloud',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-filestore',
                        displayName: 'Cloud Filestore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPStorage}/cloud-filestore.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/firestore/docs',
                            'Pricing Details': 'https://cloud.google.com/firestore/pricing',
                            'SLA': 'https://cloud.google.com/firestore/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-storage',
                        displayName: 'Cloud Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPStorage}/cloud-storage.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/storage/docs',
                            'Pricing Details': 'https://cloud.google.com/storage/pricing',
                            'SLA': 'https://cloud.google.com/storage/sla',
                        },
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'persistent-disk',
                        displayName: 'Persistent Disk',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.GCP}/${SymbolGroupConstants.GCPStorage}/persistent-disk.svg`,
                        docs: {
                            'Official Documentation': 'https://cloud.google.com/compute/docs/disks/',
                            'Pricing Details': 'https://cloud.google.com/compute/disks-image-pricing#disk',
                            'SLA': 'https://cloud.google.com/compute/sla',
                        },
                    },
                ],
            },

            //#endregion

        ],
    },

    //#endregion GCP

    //#region Cloudflare

    {
        id: SymbolFamilyConstants.Cloudflare,
        displayName: 'Cloudflare',
        SymbolGroups: [

            //#region cloudflare

            {
                id: SymbolGroupConstants.Cloudflare,
                displayName: SymbolGroupDisplayNameConstants.Cloudflare,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'access',
                        displayName: 'Access',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/access.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api',
                        displayName: 'API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/api.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'argo-tunnel',
                        displayName: 'Argo Tunnel',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/argo-tunnel.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'beacon-randomness',
                        displayName: 'Beacon Randomness',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/beacon-randomness.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'byoip',
                        displayName: 'BYOIP',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/byoip.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudflare',
                        displayName: 'Cloudflare',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/cloudflare.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'distributed-web-gateway',
                        displayName: 'Distributed Web Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/distributed-web-gateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'firewall',
                        displayName: 'Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/firewall.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gateway',
                        displayName: 'Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/gateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'http3',
                        displayName: 'Http/3',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/http3.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image-resizing',
                        displayName: 'Image Resizing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/image-resizing.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'internet',
                        displayName: 'Internet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/internet.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'load-balancing',
                        displayName: 'Load Balancing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/load-balancing.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logs',
                        displayName: 'Logs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/logs.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'magic-transit',
                        displayName: 'Magic Transit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/magic-transit.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-sdk',
                        displayName: 'Mobile SDK',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/mobile-sdk.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-interconnect',
                        displayName: 'Network Interconnect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/network-interconnect.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'registrar',
                        displayName: 'Registrar',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/registrar.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'spectrum',
                        displayName: 'Spectrum',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/spectrum.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ssl',
                        displayName: 'SSL',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/ssl.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stream',
                        displayName: 'Stream',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/stream.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'time-services',
                        displayName: 'Time Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/time-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'waf',
                        displayName: 'WAF',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/waf.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'warp-client',
                        displayName: 'WARP Client',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/warp-client.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workers',
                        displayName: 'Workers',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Cloudflare}/${SymbolGroupConstants.Cloudflare}/workers.svg`,
                    },
                ],
            },

            //#endregion

        ],
    },

    //#endregion Cloudflare

    //#region CNCF

    {
        id: SymbolFamilyConstants.K8s_CNCF_Ecosystem,
        displayName: 'Kubernetes & CNCF Ecosystem',
        SymbolGroups: [

            //#region CNCF

            {
                id: SymbolGroupConstants.CNCF,
                displayName: SymbolGroupDisplayNameConstants.CNCF,
                tags: [
                    'cloud-native',
                    'cloud native computing foundation'
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cncf',
                        displayName: 'CNCF',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/cncf.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'coredns',
                        displayName: 'CoreDNS',
                        synonyms: [
                            'service discovery'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/coredns.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'containerd',
                        displayName: 'Containerd',
                        synonyms: [
                            'oci',
                            'open container initiative',
                            'container runtime'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/containerd.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'envoy',
                        displayName: 'Envoy',
                        synonyms: [
                            'service proxy'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/envoy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fluentd',
                        displayName: 'Fluentd',
                        synonyms: [
                            'open source data collector',
                            'unified logging layer',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/fluentd.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'helm',
                        displayName: 'Helm',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/helm.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jaeger',
                        displayName: 'Jaeger',
                        synonyms: [
                            'distributed tracing'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/jaeger.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kubernetes',
                        displayName: 'Kubernetes',
                        synonyms: [
                            'containers',
                            'k8s',
                            'orchestration'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/kubernetes.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'prometheus',
                        displayName: 'Prometheus',
                        synonyms: [
                            'monitoring'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/prometheus.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tuf',
                        displayName: 'TUF',
                        synonyms: [
                            'software update framework'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/tuf.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vitess',
                        displayName: 'Vitess',
                        synonyms: [
                            'database clustering',
                            'mysql'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.CNCF}/vitess.svg`
                    },
                ]
            },

            //#endregion

            //#region Kubernetes Community

            {
                id: SymbolGroupConstants.KubernetesCommunity,
                displayName: SymbolGroupDisplayNameConstants.KubernetesCommunity,
                tags: [
                    'cloud-native',
                    'cloud native computing foundation',
                    'k8s',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cluster-role-binding',
                        displayName: 'Cluster Role Binding',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/cluster-role-binding.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cluster-role',
                        displayName: 'Cluster Role',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/cluster-role.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'config-map',
                        displayName: 'Config Map',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/config-map.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'custom-resource-definition',
                        displayName: 'Custom Resource Definition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/custom-resource-definition.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'daemon-set',
                        displayName: 'Daemon Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/daemon-set.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'deployment',
                        displayName: 'Deployment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/deployment.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'endpoint',
                        displayName: 'Endpoint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/endpoint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'etcd',
                        displayName: 'Etcd',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/etcd.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'group',
                        displayName: 'Group',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'horizontal-pod-autoscaler',
                        displayName: 'Horizontal Pod Autoscaler',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/horizontal-pod-autoscaler.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ingress',
                        displayName: 'Ingress',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/ingress.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'job',
                        displayName: 'Job',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/job.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'limit-range',
                        displayName: 'Limit Range',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/limit-range.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'master',
                        displayName: 'Master',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/master.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'namespace',
                        displayName: 'Namespace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/namespace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-policy',
                        displayName: 'Network Policy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/network-policy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'node',
                        displayName: 'Node',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/node.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'persistent-volume-claim',
                        displayName: 'Persistent Volume Claim',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/persistent-volume-claim.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'persistent-volume',
                        displayName: 'Persistent Volume',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/persistent-volume.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pod-security-policy',
                        displayName: 'Pod Security Policy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/pod-security-policy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pod',
                        displayName: 'Pod',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/pod.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'quota',
                        displayName: 'Quota',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/quota.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'replica-set',
                        displayName: 'Replica Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/replica-set.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'role-binding',
                        displayName: 'Role Binding',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/role-binding.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'role',
                        displayName: 'Role',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/role.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'secret',
                        displayName: 'Secret',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/secret.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-account',
                        displayName: 'Service Account',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/service-account.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service',
                        displayName: 'Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stateful-set',
                        displayName: 'Stateful Set',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/stateful-set.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-class',
                        displayName: 'Storage Class',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/storage-class.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user',
                        displayName: 'User',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/user.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'volume',
                        displayName: 'Volume',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.KubernetesCommunity}/volume.svg`
                    },
                ],
            },

            //#endregion Kubernetes Community

            //#region Rancher Labs

            {
                id: SymbolGroupConstants.Rancher,
                displayName: SymbolGroupDisplayNameConstants.Rancher,
                tags: [
                    'enterprise kubernetes',
                    'k8s',
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'k3os',
                        displayName: 'K3OS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/k3os.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'k3s',
                        displayName: 'K3s',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/k3s.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'longhorn',
                        displayName: 'Longhorn',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/longhorn.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rancher',
                        displayName: 'Rancher',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/rancher.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rio',
                        displayName: 'Rio',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/rio.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rke',
                        displayName: 'RKE',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/rke.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'submariner',
                        displayName: 'Submariner',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.K8s_CNCF_Ecosystem}/${SymbolGroupConstants.Rancher}/submariner.svg`
                    },
                ],
            },

            //#endregion Rancher Labs
        ],
    },

    //#endregion CNCF

    //#region Elastic

    {
        id: SymbolFamilyConstants.Elastic,
        displayName: 'Elastic',
        SymbolGroups: [

            //#region elastic

            {
                id: SymbolGroupConstants.Elastic,
                displayName: SymbolGroupDisplayNameConstants.Elastic,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'beats',
                        displayName: 'Beats',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/beats.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-apm',
                        displayName: 'Elastic APM',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-apm.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-app-search',
                        displayName: 'Elastic App Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-app-search.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-cloud-enterprise',
                        displayName: 'Elastic Cloud Enterprise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-cloud-enterprise.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-cloud-kubernetes',
                        displayName: 'Elastic Cloud Kubernetes',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-cloud-kubernetes.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-cloud',
                        displayName: 'Elastic Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-cloud.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-endpoint-security',
                        displayName: 'Elastic Endpoint Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-endpoint-security.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-enterprise-search',
                        displayName: 'Elastic Enterprise Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-enterprise-search.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-logs',
                        displayName: 'Elastic Logs',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-logs.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-maps',
                        displayName: 'Elastic Maps',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-maps.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-metrics',
                        displayName: 'Elastic Metrics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-metrics.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-siem',
                        displayName: 'Elastic SIEM',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-siem.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-site-search',
                        displayName: 'Elastic Site Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-site-search.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-stack',
                        displayName: 'Elastic Stack',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-stack.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-uptime',
                        displayName: 'Elastic Uptime',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elastic-uptime.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elasticsearch',
                        displayName: 'Elasticsearch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/elasticsearch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kibana',
                        displayName: 'Kibana',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/kibana.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logstash',
                        displayName: 'Logstash',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Elastic}/${SymbolGroupConstants.Elastic}/logstash.svg`,
                    },
                ],
            },

            //#endregion

        ],
    },

    //#endregion Elastic

    //#region FontAwesome

    {
        id: SymbolFamilyConstants.FontAwesome,
        displayName: 'FontAwesome',
        SymbolGroups: [

            //#region FontAwesome (Regular)

            {
                id: SymbolGroupConstants.FontAwesomeRegular,
                displayName: SymbolGroupDisplayNameConstants.FontAwesomeRegular,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'address-book',
                        displayName: 'Address Book',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/address-book.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'address-card',
                        displayName: 'Address Card',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/address-card.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'angry',
                        displayName: 'Angry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/angry.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'arrow-alt-circle-down',
                        displayName: 'Arrow (Down)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/arrow-alt-circle-down.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'arrow-alt-circle-left',
                        displayName: 'Arrow (Left)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/arrow-alt-circle-left.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'arrow-alt-circle-right',
                        displayName: 'Arrow (Right)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/arrow-alt-circle-right.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'arrow-alt-circle-up',
                        displayName: 'Arrow (Up)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/arrow-alt-circle-up.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bell-slash',
                        displayName: 'Bell (Slash)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/bell-slash.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bell',
                        displayName: 'Bell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/bell.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bookmark',
                        displayName: 'Bookmark',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/bookmark.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'building',
                        displayName: 'Building',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/building.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar-alt',
                        displayName: 'Calendar (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar-check',
                        displayName: 'Calendar (Check)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar-check.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar-minus',
                        displayName: 'Calendar (Minus)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar-minus.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar-plus',
                        displayName: 'Calendar (Plus)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar-plus.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar-times',
                        displayName: 'Calendar (Times)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar-times.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar',
                        displayName: 'Calendar',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/calendar.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'caret-square-down',
                        displayName: 'Caret (Down)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/caret-square-down.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'caret-square-left',
                        displayName: 'Caret (Left)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/caret-square-left.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'caret-square-right',
                        displayName: 'Caret (Right)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/caret-square-right.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'caret-square-up',
                        displayName: 'Caret (Up)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/caret-square-up.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'chart-bar',
                        displayName: 'Chart (Bar)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/chart-bar.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'check-circle',
                        displayName: 'Check (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/check-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'check-square',
                        displayName: 'Check (Square)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/check-square.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'circle',
                        displayName: 'Circle',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'clipboard',
                        displayName: 'Clipboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/clipboard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'clock',
                        displayName: 'Clock',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/clock.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'clone',
                        displayName: 'Clone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/clone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'closed-captioning',
                        displayName: 'Closed Captioning',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/closed-captioning.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'comment-alt',
                        displayName: 'Comment (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/comment-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'comment-dots',
                        displayName: 'Comment (Dots)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/comment-dots.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'comment',
                        displayName: 'Comment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/comment.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'comments',
                        displayName: 'Comments',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/comments.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'compass',
                        displayName: 'Compass',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/compass.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'copy',
                        displayName: 'Copy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/copy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'copyright',
                        displayName: 'Copyright',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/copyright.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'credit-card',
                        displayName: 'Credit Card',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/credit-card.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dizzy',
                        displayName: 'Dizzy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/dizzy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dot-circle',
                        displayName: 'Dot',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/dot-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'edit',
                        displayName: 'Edit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/edit.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'envelope-open',
                        displayName: 'Envelope Open',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/envelope-open.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'envelope',
                        displayName: 'Envelope',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/envelope.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'eye-slash',
                        displayName: 'Eye (Slash)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/eye-slash.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'eye',
                        displayName: 'eye',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/eye.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-alt',
                        displayName: 'File (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-archive',
                        displayName: 'File (Archive)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-archive.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-audio',
                        displayName: 'File (Audio)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-audio.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-code',
                        displayName: 'File (Code)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-code.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-excel',
                        displayName: 'File (Excel)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-excel.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-image',
                        displayName: 'File (Image)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-image.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-pdf',
                        displayName: 'File (Pdf)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-pdf.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-powerpoint',
                        displayName: 'File (PowerPoint)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-powerpoint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-video',
                        displayName: 'File (Video)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-video.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-word',
                        displayName: 'File (Word)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file-word.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file',
                        displayName: 'File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'flag',
                        displayName: 'Flag',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/flag.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'flushed',
                        displayName: 'Flushed',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/flushed.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'folder-open',
                        displayName: 'Folder (Open)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/folder-open.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'folder',
                        displayName: 'Folder',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/folder.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'frown-open',
                        displayName: 'Frown (Open)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/frown-open.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'frown',
                        displayName: 'Frown',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/frown.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'futbol',
                        displayName: 'Futbol',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/futbol.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gem',
                        displayName: 'Gem',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/gem.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grimace',
                        displayName: 'Grimace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grimace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-alt',
                        displayName: 'Grin (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-beam-sweat',
                        displayName: 'Grin (Beam, Sweat)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-beam-sweat.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-beam',
                        displayName: 'Grin (Beam)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-beam.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-hearts',
                        displayName: 'Grin (Hearts)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-hearts.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-squint-tears',
                        displayName: 'Grin (Squint, Tears)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-squint-tears.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-squint',
                        displayName: 'Grin (Squint)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-squint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-stars',
                        displayName: 'Grin (Stars)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-stars.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-tears',
                        displayName: 'Grin (Tears)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-tears.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-tongue-squint',
                        displayName: 'Grin (Tongue, Squint)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-tongue-squint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-tongue-wink',
                        displayName: 'Grin (Tongue, Wink)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-tongue-wink.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-tongue',
                        displayName: 'Grin (Tongue)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-tongue.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin-wink',
                        displayName: 'Grin (Wink)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin-wink.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grin',
                        displayName: 'Grin',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/grin.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-lizard',
                        displayName: 'Hand (Lizard)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-lizard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-paper',
                        displayName: 'Hand (Paper)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-paper.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-peace',
                        displayName: 'Hand (Peace)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-peace.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-point-down',
                        displayName: 'Hand (Point Down)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-point-down.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-point-left',
                        displayName: 'Hand (Point Left)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-point-left.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-point-right',
                        displayName: 'Hand (Point Right)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-point-right.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-point-up',
                        displayName: 'Hand (Point Up)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-point-up.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-pointer',
                        displayName: 'Hand (Pointer)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-pointer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-rock',
                        displayName: 'Hand (Rock)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-rock.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-scissors',
                        displayName: 'Hand (Scissors)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-scissors.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hand-spock',
                        displayName: 'Hand (Spock)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hand-spock.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'handshake',
                        displayName: 'Handshake',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/handshake.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hdd',
                        displayName: 'HDD',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hdd.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'heart',
                        displayName: 'Heart',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/heart.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hospital',
                        displayName: 'Hospital',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hospital.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hourglass',
                        displayName: 'Hourglass',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/hourglass.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'id-badge',
                        displayName: 'Id (Badge)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/id-badge.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'id-card',
                        displayName: 'Id (Card)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/id-card.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'image',
                        displayName: 'Image',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/image.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'images',
                        displayName: 'Images',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/images.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'keyboard',
                        displayName: 'Keyboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/keyboard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kiss-beam',
                        displayName: 'Kiss (Beam)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/kiss-beam.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kiss-wink-heart',
                        displayName: 'Kiss (Wink, Heart)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/kiss-wink-heart.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kiss',
                        displayName: 'Kiss',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/kiss.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laugh-beam',
                        displayName: 'Laugh (Beam)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/laugh-beam.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laugh-squint',
                        displayName: 'Laugh (Squint)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/laugh-squint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laugh-wink',
                        displayName: 'Laugh (Wink)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/laugh-wink.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laugh',
                        displayName: 'Laugh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/laugh.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lemon',
                        displayName: 'Lemon',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/lemon.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'life-ring',
                        displayName: 'LifeRing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/life-ring.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'lightbulb',
                        displayName: 'Lightbulb',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/lightbulb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'list-alt',
                        displayName: 'List (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/list-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'map',
                        displayName: 'Map',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/map.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'meh-blank',
                        displayName: 'Meh (Blank)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/meh-blank.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'meh-rolling-eyes',
                        displayName: 'Meh (Rolling Eyes)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/meh-rolling-eyes.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'meh',
                        displayName: 'Meh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/meh.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'minus-square',
                        displayName: 'Minus (Square)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/minus-square.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'money-bill-alt',
                        displayName: 'Money (Bill)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/money-bill-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'moon',
                        displayName: 'Moon',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/moon.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'newspaper',
                        displayName: 'Newspaper',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/newspaper.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'object-group',
                        displayName: 'Object (Group)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/object-group.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'object-ungroup',
                        displayName: 'Object (Ungroup)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/object-ungroup.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'paper-plane',
                        displayName: 'Paper Plane',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/paper-plane.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pause-circle',
                        displayName: 'Pause (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/pause-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'play-circle',
                        displayName: 'Play (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/play-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'plus-square',
                        displayName: 'Plus (Square)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/plus-square.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'question-circle',
                        displayName: 'Question (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/question-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'registered',
                        displayName: 'Registered',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/registered.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sad-cry',
                        displayName: 'Sad (Cry)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/sad-cry.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sad-tear',
                        displayName: 'Sad (Tear)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/sad-tear.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'save',
                        displayName: 'Save',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/save.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'share-square',
                        displayName: 'Share (Square)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/share-square.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smile-beam',
                        displayName: 'Smile (Beam)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/smile-beam.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smile-wink',
                        displayName: 'Smile (Wink)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/smile-wink.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smile',
                        displayName: 'Smile',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/smile.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'snowflake',
                        displayName: 'Snowflake',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/snowflake.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'square',
                        displayName: 'Square',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/square.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'star-half',
                        displayName: 'Star (Half)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/star-half.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'star',
                        displayName: 'Star',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/star.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sticky-note',
                        displayName: 'Sticky Note',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/sticky-note.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stop-circle',
                        displayName: 'Stop (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/stop-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sun',
                        displayName: 'Sun',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/sun.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'surprise',
                        displayName: 'Surprise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/surprise.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thumbs-down',
                        displayName: 'Thumbs (Down)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/thumbs-down.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'thumbs-up',
                        displayName: 'Thumbs (Up)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/thumbs-up.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'times-circle',
                        displayName: 'Times (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/times-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tired',
                        displayName: 'Tired',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/tired.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'trash-alt',
                        displayName: 'Trash (Alt)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/trash-alt.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user-circle',
                        displayName: 'User (Circle)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/user-circle.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user',
                        displayName: 'User',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/user.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'window-close',
                        displayName: 'Window (Close)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/window-close.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'window-maximize',
                        displayName: 'Window (Maximize)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/window-maximize.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'window-minimize',
                        displayName: 'Window (Minimize)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.FontAwesome}/${SymbolGroupConstants.FontAwesomeRegular}/window-minimize.svg`
                    },
                    // @todo: the following is not rendering correctly, so commented out for now.
                    // {
                    //     kind: 'NativeModel',
                    //     modelKind: 'NodeModel',
                    //     id: 'window-restore',
                    //     displayName: 'Window (Restore)',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.FontAwesome}/${SymbolGroup.FontAwesomeRegular}/window-restore.svg`
                    // },
                ],
            },

            //#endregion FontAwesome (Regular)

        ],

    },

    //#endregion FontAwesome

    //#region HashiCorp

    {
        id: SymbolFamilyConstants.HashiCorp,
        displayName: 'HashiCorp',
        SymbolGroups: [

            //#region HashiCorp

            {
                id: SymbolGroupConstants.HashiCorp,
                displayName: SymbolGroupDisplayNameConstants.HashiCorp,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'consul',
                        displayName: 'Consul',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/consul.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hashicorp',
                        displayName: 'HashiCorp',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/hashicorp.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'nomad',
                        displayName: 'Nomad',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/nomad.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'packer',
                        displayName: 'Packer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/packer.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'terraform',
                        displayName: 'Terraform',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/terraform.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vagrant',
                        displayName: 'Vagrant',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/vagrant.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vault',
                        displayName: 'Vault',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.HashiCorp}/${SymbolGroupConstants.HashiCorp}/vault.svg`,
                    },
                ],

            },

            //#endregion HashiCorp

        ],
    },

    //#endregion HashiCorp

    //#region IBM

    {
        id: SymbolFamilyConstants.IBM,
        displayName: 'IBM Cloud',
        SymbolGroups: [

            //#region IBM Analytics

            {
                id: SymbolGroupConstants.IBMAnalytics,
                displayName: SymbolGroupDisplayNameConstants.IBMAnalytics,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ibm-analytics',
                        displayName: 'Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMAnalytics}/ibm-analytics.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-integration',
                        displayName: 'Data Integration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMAnalytics}/data-integration.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-repositories',
                        displayName: 'Data Repositories',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMAnalytics}/data-repositories.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-analytics',
                        displayName: 'Device Analytics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMAnalytics}/device-analytics.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'streaming-computing',
                        displayName: 'Streaming Computing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMAnalytics}/streaming-computing.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Applications

            {
                id: SymbolGroupConstants.IBMApplications,
                displayName: SymbolGroupDisplayNameConstants.IBMApplications,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'actionable-insight',
                        displayName: 'Actionable Insight',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/actionable-insight.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'annotate',
                        displayName: 'Annotate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/annotate.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-developer-portal',
                        displayName: 'API Developer Portal',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/api-developer-portal.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-polyglot-runtimes',
                        displayName: 'API Polyglot Runtimes',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/api-polyglot-runtimes.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-logic',
                        displayName: 'Application Logic',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/application-logic.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'app-server',
                        displayName: 'App Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/app-server.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'automation-tools',
                        displayName: 'Automation Tools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/automation-tools.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-applications',
                        displayName: 'Enterprise Applications',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/enterprise-applications.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'index',
                        displayName: 'Index',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/index.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-application',
                        displayName: 'IOT Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/iot-application.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'microservice',
                        displayName: 'Microservice',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/microservice.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-app',
                        displayName: 'Mobile App',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/mobile-app.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ontology',
                        displayName: 'Ontology',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/ontology.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'open-source-tools',
                        displayName: 'Open Source Tools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/open-source-tools.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'runtime-services',
                        displayName: 'Runtime Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/runtime-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'saas-applications',
                        displayName: 'SaaS Applications',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/saas-applications.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-broker',
                        displayName: 'Service Broker',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/service-broker.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'speech-to-text',
                        displayName: 'Speech To Text',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/speech-to-text.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'visualization',
                        displayName: 'Visualization',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/visualization.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'visual-recognition',
                        displayName: 'Visual Recognition',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMApplications}/visual-recognition.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Blockchain

            {
                id: SymbolGroupConstants.IBMBlockchain,
                displayName: SymbolGroupDisplayNameConstants.IBMBlockchain,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blockchain',
                        displayName: 'Blockchain',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/blockchain.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blockchain-developer',
                        displayName: 'Blockchain Developer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/blockchain-developer.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'certificate-authority',
                        displayName: 'Certificate Authority',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/certificate-authority.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'client-application',
                        displayName: 'Client Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/client-application.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'communication',
                        displayName: 'Communication',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/communication.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'consensus',
                        displayName: 'Consensus',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/consensus.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'e-cert',
                        displayName: 'E-Cert',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/e-cert.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event',
                        displayName: 'Event',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/event.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-listener',
                        displayName: 'Event Listener',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/event-listener.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'existing-enterprise-systems',
                        displayName: 'Existing Enterprise Systems',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/existing-enterprise-systems.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hyperledger-fabric',
                        displayName: 'Hyperledger Fabric',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/hyperledger-fabric.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'identity-access-manager',
                        displayName: 'Identity Access Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/identity-access-manager.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-management',
                        displayName: 'Key Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/key-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ledger',
                        displayName: 'Ledger',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/ledger.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'membership',
                        displayName: 'Membership',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/membership.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'membership-services-provider-api',
                        displayName: 'Membership Services Provider API',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/membership-services-provider-api.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message-bus',
                        displayName: 'Message Bus',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/message-bus.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'node',
                        displayName: 'Node',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/node.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'services',
                        displayName: 'Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smart-contract',
                        displayName: 'Smart Contract',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/smart-contract.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transaction-manager',
                        displayName: 'Transaction Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/transaction-manager.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'wallet',
                        displayName: 'Wallet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMBlockchain}/wallet.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Data

            {
                id: SymbolGroupConstants.IBMData,
                displayName: SymbolGroupDisplayNameConstants.IBMData,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'caches',
                        displayName: 'Caches',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/caches.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud',
                        displayName: 'Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/cloud.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'conversation-trained-deployed',
                        displayName: 'Conversation (Trained & Deployed)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/conversation-trained-deployed.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-services',
                        displayName: 'Data Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/data-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-sources',
                        displayName: 'Data Sources',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/data-sources.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-identity-service',
                        displayName: 'Device Identity Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/device-identity-service.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-registry',
                        displayName: 'Device Registry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/device-registry.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-data',
                        displayName: 'Enterprise Data',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/enterprise-data.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-user-directory',
                        displayName: 'Enterprise User Directory',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/enterprise-user-directory.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-repository',
                        displayName: 'File Repository',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/file-repository.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ground-truth',
                        displayName: 'Ground Truth',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/ground-truth.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'model',
                        displayName: 'Model',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/model.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tms-data-interface',
                        displayName: 'TMS Data Interface',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMData}/tms-data-interface.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM DevOps

            {
                id: SymbolGroupConstants.IBMDevOps,
                displayName: SymbolGroupDisplayNameConstants.IBMDevOps,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'artifact-management',
                        displayName: 'Artifact Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/artifact-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'build-test',
                        displayName: 'Build Test',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/build-test.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'code-editor',
                        displayName: 'Code Editor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/code-editor.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'collaborative-development',
                        displayName: 'Collaborative Development',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/collaborative-development.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'configuration-management',
                        displayName: 'Configuration Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/configuration-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'continuous-deploy',
                        displayName: 'Continuous Deploy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/continuous-deploy.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'continuous-testing',
                        displayName: 'Continuous Testing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/continuous-testing.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'devops',
                        displayName: 'DevOps',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/devops.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'provision',
                        displayName: 'Provision',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/provision.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'release-management',
                        displayName: 'Release Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMDevOps}/release-management.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Infrastructure

            {
                id: SymbolGroupConstants.IBMInfrastructure,
                displayName: SymbolGroupDisplayNameConstants.IBMInfrastructure,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'channels',
                        displayName: 'Channels',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/channels.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-messaging',
                        displayName: 'Cloud Messaging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/cloud-messaging.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dashboard',
                        displayName: 'Dashboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/dashboard.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'diagnostics',
                        displayName: 'Diagnostics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/diagnostics.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'edge-services',
                        displayName: 'Edge Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/edge-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise-messaging',
                        displayName: 'Enterprise Messaging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/enterprise-messaging.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'event-feed',
                        displayName: 'Event Feed',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/event-feed.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'infrastructure-services',
                        displayName: 'Infrastructure Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/infrastructure-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'interservice-communication',
                        displayName: 'Interservice Communication',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/interservice-communication.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'load-balancing-routing',
                        displayName: 'Load Balancing (Routing)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/load-balancing-routing.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'microservices-mesh',
                        displayName: 'Microservices Mesh',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/microservices-mesh.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-backend',
                        displayName: 'Mobile Backend',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/mobile-backend.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile-provider-network',
                        displayName: 'Mobile Provider Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/mobile-provider-network.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'monitoring',
                        displayName: 'Monitoring',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/monitoring.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'monitoring-logging',
                        displayName: 'Monitoring Logging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/monitoring-logging.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'peer-services',
                        displayName: 'Peer Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/peer-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-discovery-configuration',
                        displayName: 'Service Discovery Configuration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/service-discovery-configuration.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transformation-connectivity',
                        displayName: 'Transformation & Connectivity',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMInfrastructure}/transformation-connectivity.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Management

            {
                id: SymbolGroupConstants.IBMManagement,
                displayName: SymbolGroupDisplayNameConstants.IBMManagement,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'alert-notification',
                        displayName: 'Alert Notification',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/alert-notification.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-management',
                        displayName: 'API Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/api-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-management',
                        displayName: 'Cloud Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/cloud-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cluster-management',
                        displayName: 'Cluster Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/cluster-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'content-management',
                        displayName: 'Content Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/content-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-services',
                        displayName: 'Data Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/data-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device-management',
                        displayName: 'Device Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/device-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'information-governance',
                        displayName: 'Information Governance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/information-governance.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'it-service-management',
                        displayName: 'IT Service Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/it-service-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'management',
                        displayName: 'Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'monitoring-metrics',
                        displayName: 'Monitoring & Metrics',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/monitoring-metrics.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'process-management',
                        displayName: 'Process Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/process-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'provider-cloud-portal-service',
                        displayName: 'Provider Cloud Portal Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/provider-cloud-portal-service.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'push-notifications',
                        displayName: 'Push Notifications',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/push-notifications.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-management-tools',
                        displayName: 'Service Management Tools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMManagement}/service-management-tools.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Miscellaneous

            {
                id: SymbolGroupConstants.IBMMiscellaneous,
                displayName: SymbolGroupDisplayNameConstants.IBMMiscellaneous,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bluemix',
                        displayName: 'Bluemix',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/bluemix.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudant',
                        displayName: 'Cloudant',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/cloudant.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ibm-containers',
                        displayName: 'IBM Containers',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/ibm-containers.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ibm-public-cloud',
                        displayName: 'IBM Public Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/ibm-public-cloud.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iot-cloud',
                        displayName: 'IOT Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/iot-cloud.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'microservices-application',
                        displayName: 'Microservices Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/microservices-application.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'object-storage',
                        displayName: 'Object Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/object-storage.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'offline-capabilities',
                        displayName: 'Offline Capabilities',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/offline-capabilities.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'openwhisk',
                        displayName: 'Openwhisk',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/openwhisk.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'peer-cloud',
                        displayName: 'Peer Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/peer-cloud.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'retrieve-rank',
                        displayName: 'Retrieve Rank',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/retrieve-rank.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'scalable',
                        displayName: 'Scalable',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/scalable.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'text-to-speech',
                        displayName: 'Text To Speech',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMMiscellaneous}/text-to-speech.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Security

            {
                id: SymbolGroupConstants.IBMSecurity,
                displayName: SymbolGroupDisplayNameConstants.IBMSecurity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-security',
                        displayName: 'API Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/api-security.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blockchain-security-service',
                        displayName: 'Blockchain Security Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/blockchain-security-service.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-security',
                        displayName: 'Data Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/data-security.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'firewall',
                        displayName: 'Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/firewall.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gateway',
                        displayName: 'Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/gateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'governance-risk-compliance',
                        displayName: 'Governance Risk & Compliance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/governance-risk-compliance.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'identity-access-management',
                        displayName: 'Identity & Access Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/identity-access-management.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'identity-provider',
                        displayName: 'Identity Provider',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/identity-provider.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'infrastructure-security',
                        displayName: 'Infrastructure Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/infrastructure-security.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'physical-security',
                        displayName: 'Physical Security',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/physical-security.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-monitoring-intelligence',
                        displayName: 'Security Monitoring & Intelligence',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/security-monitoring-intelligence.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-services',
                        displayName: 'Security Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/security-services.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'trustend-computing',
                        displayName: 'Trusted Computing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/trustend-computing.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpn',
                        displayName: 'VPN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSecurity}/vpn.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Social

            {
                id: SymbolGroupConstants.IBMSocial,
                displayName: SymbolGroupDisplayNameConstants.IBMSocial,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'communities',
                        displayName: 'Communities',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSocial}/communities.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-sync',
                        displayName: 'File Sync',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSocial}/file-sync.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'live-collaboration',
                        displayName: 'Live Collaboration',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSocial}/live-collaboration.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'messaging',
                        displayName: 'Messaging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSocial}/messaging.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'networking',
                        displayName: 'Networking',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMSocial}/networking.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM Users

            {
                id: SymbolGroupConstants.IBMUsers,
                displayName: SymbolGroupDisplayNameConstants.IBMUsers,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'browser',
                        displayName: 'Browser',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/browser.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device',
                        displayName: 'Device',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/device.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'integrated-digital-experiences',
                        displayName: 'Integrated Digital Experiences',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/integrated-digital-experiences.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'physical-entity',
                        displayName: 'Physical Entity',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/physical-entity.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sensor',
                        displayName: 'Sensor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/sensor.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user',
                        displayName: 'User',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMUsers}/user.svg`,
                    },
                ],
            },

            //#endregion

            //#region IBM VPC

            {
                id: SymbolGroupConstants.IBMVpc,
                displayName: SymbolGroupDisplayNameConstants.IBMVpc,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'baremetalserver',
                        displayName: 'Bare Metal Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/baremetalserver.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'blockstorage',
                        displayName: 'Block Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/blockstorage.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bridge',
                        displayName: 'Bridge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/bridge.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloudservices',
                        displayName: 'Cloud Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/cloudservices.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'directlink',
                        displayName: 'Direct Link',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/directlink.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'imageservice',
                        displayName: 'Image Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/imageservice.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'instance',
                        displayName: 'Instance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/instance.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'internet',
                        displayName: 'Internet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/internet.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'internetservices2',
                        displayName: 'Internet Services',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/internetservices2.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key',
                        displayName: 'Key',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/key.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'loadbalancer',
                        displayName: 'Load Balancer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/loadbalancer.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'loadbalancerlistener',
                        displayName: 'Load Balancer Listener',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/loadbalancerlistener.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'loadbalancerpool',
                        displayName: 'Load Balancer Pool',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/loadbalancerpool.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'objectstorage',
                        displayName: 'Object Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/objectstorage.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'powerinstance',
                        displayName: 'Power Instance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/powerinstance.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'publicgateway',
                        displayName: 'Public Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/publicgateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'router',
                        displayName: 'Router',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/router.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rules',
                        displayName: 'Rules',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/rules.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'transitgateway',
                        displayName: 'Transit Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/transitgateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpnconnection',
                        displayName: 'VPN Connection',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/vpnconnection.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpngateway',
                        displayName: 'VPN Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/vpngateway.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpnpolicy',
                        displayName: 'VPN Policy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.IBM}/${SymbolGroupConstants.IBMVpc}/vpnpolicy.svg`,
                    },
                ],
            },

            //#endregion

        ],
    },

    //#endregion IBM

    //#region General

    {
        id: SymbolFamilyConstants.General,
        displayName: 'General',
        SymbolGroups: [

            //#region ecosystem

            {
                id: SymbolGroupConstants.Ecosystem,
                displayName: SymbolGroupDisplayNameConstants.Ecosystem,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'android',
                        displayName: 'Android',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/android.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ansible',
                        displayName: 'Ansible',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/ansible.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apache-camel',
                        displayName: 'Apache Camel',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/apache-camel.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'apache-kafka',
                        displayName: 'Apache Kafka',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/apache-kafka.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'auth0',
                        displayName: 'Auth0',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/auth0.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bitbucket',
                        displayName: 'Bitbucket',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/bitbucket.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'clickhouse',
                        displayName: 'ClickHouse',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/clickhouse.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'datadog',
                        displayName: 'Datadog',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/datadog.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'digitalocean',
                        displayName: 'DigitalOcean',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/digitalocean.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'docker',
                        displayName: 'Docker',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/docker.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'excel',
                        displayName: 'Excel',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/excel.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'git',
                        displayName: 'Git',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/git.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'github',
                        displayName: 'GitHub',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/github.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gitlab',
                        displayName: 'GitLab',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/gitlab.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'grafana',
                        displayName: 'Grafana',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/grafana.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'hasura',
                        displayName: 'Hasura',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/hasura.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'heroku',
                        displayName: 'Heroku',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/heroku.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jenkins',
                        displayName: 'Jenkins',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jenkins.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-access',
                        displayName: 'jfrog Access',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-access.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-artifactory',
                        displayName: 'JFrog Artifactory',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-artifactory.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-artifactory-edge',
                        displayName: 'JFrog Artifactory Edge',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-artifactory-edge.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-container-registry',
                        displayName: 'JFrog Container Registry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-container-registry.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-distribution',
                        displayName: 'JFrog Distribution',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-distribution.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-enterprise',
                        displayName: 'JFrog Enterprise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-enterprise.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-mission-control',
                        displayName: 'JFrog Mission Control',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-mission-control.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-pipelines',
                        displayName: 'JFrog Pipelines',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-pipelines.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog-xray',
                        displayName: 'JFrog Xray',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog-xray.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'jfrog',
                        displayName: 'JFrog',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/jfrog.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'linkedin',
                        displayName: 'LinkedIn',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/linkedin.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'linux',
                        displayName: 'Linux',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/linux.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'Mac',
                        displayName: 'Mac',
                        synonyms: [
                            'apple',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/mac.svg`
                    },
                    // @todo: the following are not rendering correctly, so commented out for now.
                    // {
                    //     id: 'microsoft-excel',
                    //     displayName: 'Microsoft Excel',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-excel.svg`
                    // },
                    // {
                    //     id: 'microsoft-onedrive',
                    //     displayName: 'Microsoft OneDrive',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-onedrive.svg`
                    // },
                    // {
                    //     id: 'microsoft-onenote',
                    //     displayName: 'Microsoft OneNote',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-onenote.svg`
                    // },
                    // {
                    //     id: 'microsoft-outlook',
                    //     displayName: 'Microsoft Outlook',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-outlook.svg`
                    // },
                    // {
                    //     id: 'microsoft-powerpoint',
                    //     displayName: 'Microsoft PowerPoint',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-powerpoint.svg`
                    // },
                    // {
                    //     id: 'microsoft-sharepoint',
                    //     displayName: 'Microsoft SharePoint',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-sharepoint.svg`
                    // },
                    // {
                    //     id: 'microsoft-skype',
                    //     displayName: 'Microsoft Skype',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-skype.svg`
                    // },
                    // {
                    //     id: 'microsoft-teams',
                    //     displayName: 'Microsoft Teams',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-teams.svg`
                    // },
                    // {
                    //     id: 'microsoft-word',
                    //     displayName: 'Microsoft Word',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-word.svg`
                    // },
                    // {
                    //     id: 'microsoft-yammer',
                    //     displayName: 'Microsoft Yammer',
                    //     svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamily.General}/${SymbolGroup.Ecosystem}/microsoft-yammer.svg`
                    // },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mongodb',
                        displayName: 'MongoDB',
                        synonyms: [
                            'nosql',
                            'no-sql',
                            'document',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/mongodb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'netlify',
                        displayName: 'Netlify',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/netlify.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'nginx',
                        displayName: 'Nginx',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/nginx.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'octopus-deploy',
                        displayName: 'Octopus Deploy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/octopus-deploy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'office365',
                        displayName: 'Office 365',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/office365.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'onedrive',
                        displayName: 'OneDrive',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/onedrive.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'onenote',
                        displayName: 'OneNote',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/onenote.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'openshift',
                        displayName: 'OpenShift',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/openshift.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'outlook',
                        displayName: 'Outlook',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/outlook.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'power-apps',
                        displayName: 'Power Apps',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/power-apps.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'power-automate',
                        displayName: 'Power Automate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/power-automate.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'power-bi',
                        displayName: 'Power BI',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/power-bi.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'power-virtual-agents',
                        displayName: 'Power Virtual Agents',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/power-virtual-agents.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'powerpoint',
                        displayName: 'PowerPoint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/powerpoint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pulumi',
                        displayName: 'Pulumi',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/pulumi.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'red-hat',
                        displayName: 'Red Hat',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/red-hat.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'salesforce',
                        displayName: 'Salesforce',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/salesforce.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'skype',
                        displayName: 'Skype',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/skype.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'slack',
                        displayName: 'Slack',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/slack.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sonarcloud',
                        displayName: 'SonarCloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/sonarcloud.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sonarlint',
                        displayName: 'SonarLint',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/sonarlint.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sonarqube',
                        displayName: 'SonarQube',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/sonarqube.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sonarsource',
                        displayName: 'SonarSource',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/sonarsource.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'spinnaker',
                        displayName: 'Spinnaker',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/spinnaker.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'teams',
                        displayName: 'Teams',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/teams.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'visual-studio-code',
                        displayName: 'Visual Studio Code',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/visual-studio-code.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'visual-studio-mac',
                        displayName: 'Visual Studio for Mac',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/visual-studio-mac.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'visual-studio',
                        displayName: 'Visual Studio',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/visual-studio.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'windows',
                        displayName: 'Windows',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/windows.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'word',
                        displayName: 'Word',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Ecosystem}/word.svg`
                    },

                ],
            },

            //#endregion

            //#region programming

            {
                id: SymbolGroupConstants.Programming,
                displayName: SymbolGroupDisplayNameConstants.Programming,
                tags: [
                    'coding',
                    'software',
                    'development',
                    'frameworks',
                    'languages',
                    'libraries'
                ],
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'angular',
                        displayName: 'Angular',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/angular.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'csharp',
                        displayName: 'CSharp',
                        synonyms: [
                            'c#',
                            'dotnet',
                            '.net',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/csharp.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'django',
                        displayName: 'Django',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/django.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dotnetcore',
                        displayName: 'DotNet Core',
                        synonyms: [
                            'c#',
                            'csharp',
                            'dotnet',
                            '.net',
                            'vb.net',
                            'f#',
                            'fsharp',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/dotnetcore.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elixir',
                        displayName: 'Elixir',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/elixir.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'expressjs',
                        displayName: 'ExpressJS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/expressjs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'golang',
                        displayName: 'Go',
                        synonyms: [
                            'golang',
                            'go lang',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/golang.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'haskell',
                        displayName: 'Haskell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/haskell.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'java',
                        displayName: 'Java',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/java.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'javascript',
                        displayName: 'JavaScript',
                        synonyms: [
                            'javascript',
                            'js',
                            'ecmascript',
                            'es',
                            'es2015',
                            'es2016',
                            'es2017',
                            'es2018',
                            'es2019',
                            'es5',
                            'es6',
                            'es7',
                            'es8',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/javascript.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'kotlin',
                        displayName: 'Kotlin',
                        synonyms: [
                            'android',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/kotlin.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'nodejs',
                        displayName: 'NodeJS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/nodejs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'phoenix',
                        displayName: 'Phoenix',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/phoenix.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'php',
                        displayName: 'PHP',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/php.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'powershell',
                        displayName: 'PowerShell',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/powershell.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'python',
                        displayName: 'Python',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/python.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'r',
                        displayName: 'R',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/r.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rails',
                        displayName: 'Rails',
                        synonyms: [
                            'rubyonrails',
                            'ruby on rails',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/rails.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'reactjs',
                        displayName: 'ReactJS',
                        synonyms: [
                            'redux',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/reactjs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ruby',
                        displayName: 'Ruby',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/ruby.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'rust',
                        displayName: 'Rust',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/rust.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'scala',
                        displayName: 'Scala',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/scala.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'sveltejs',
                        displayName: 'SvelteJS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/sveltejs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'swift',
                        displayName: 'Swift',
                        synonyms: [
                            'android',
                            'ios',
                            'ipad',
                            'iphone',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/swift.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'typescript',
                        displayName: 'TypeScript',
                        synonyms: [
                            'javascript',
                            'js',
                            'ecmascript',
                            'es',
                            'es2015',
                            'es2016',
                            'es2017',
                            'es2018',
                            'es2019',
                            'es5',
                            'es6',
                            'es7',
                            'es8',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/typescript.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vuejs',
                        displayName: 'VueJS',
                        synonyms: [
                            'vue.js',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/vuejs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'wasm',
                        displayName: 'Wasm (Web Assembly)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Programming}/wasm.svg`
                    },
                ],
            },

            //#endregion

            //#region shapes

            {
                id: SymbolGroupConstants.Shapes,
                displayName: SymbolGroupDisplayNameConstants.Shapes,
                symbols: [
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: SymbolIdConstants.Circle,
                        displayName: SymbolDisplayNameConstants.Circle,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/circle.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Ellipse'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'cylinder',
                        displayName: 'Cylinder',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/cylinder.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Cylinder'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'decagon',
                        displayName: 'Decagon (10 sided polygon)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/decagon.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Decagon'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'diamond',
                        displayName: 'Diamond',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/diamond.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Diamond'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'heptagon',
                        displayName: 'Heptagon (7 sided polygon)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/heptagon.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Heptagon'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'hexagon',
                        displayName: 'Hexagon (6 sided polygon)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/hexagon.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Hexagon'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'octagon',
                        displayName: 'Octagon (8 sided polygon)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/octagon.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Octagon'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'parallelogram',
                        displayName: 'Parallelogram',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/parallelogram.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Parallelogram'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'pentagon',
                        displayName: 'Pentagon (5 sided polygon)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/pentagon.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Pentagon'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'plus',
                        displayName: 'Plus',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/plus.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Plus'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: SymbolIdConstants.Rectangle,
                        displayName: SymbolDisplayNameConstants.Rectangle,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/rectangle.svg`,
                        synonyms: [
                            'box',
                            'envelop'
                        ],
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Rectangle'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'right-triangle',
                        displayName: 'Right Triangle',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/right-triangle.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'RightTriangle'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'star',
                        displayName: 'Star',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/star.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Star'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'trapezoid',
                        displayName: 'Trapezoid',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/trapezoid.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Trapezoid'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                    {
                        kind: 'BasicShapeModel',
                        modelKind: 'NodeModel',
                        id: 'triangle',
                        displayName: 'Triangle',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Shapes}/triangle.svg`,
                        model: {
                            shape: {
                                type: 'Basic',
                                shape: 'Triangle'
                            } as BasicShapeModel,
                            style: {
                                fill: ColorHexCodeConstants.defaultBlueForShapes,
                                strokeColor: ColorHexCodeConstants.black,
                                strokeWidth: 1,
                                opacity: 0.5,
                            } as ShapeStyleModel,
                        } as NodeModel,
                    },
                ],
            },

            //#endregion

            //#region connectors

            {
                id: SymbolGroupConstants.Connectors,
                displayName: SymbolGroupDisplayNameConstants.Connectors,
                tags: [
                    'arrows'
                ],
                symbols: [
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.LineConnector,
                        displayName: SymbolDisplayNameConstants.LineConnector,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/line-connector.svg`,
                        model: {
                            type: 'Straight',
                        } as ConnectorModel,
                    },
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.LineConnectorTwoWay,
                        displayName: SymbolDisplayNameConstants.LineConnectorTwoWay,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/line-connector-twoway.svg`,
                        model: {
                            type: 'Straight',
                            sourceDecorator: DiagramConstants.defaultConnectorSourceDecorator,
                        } as ConnectorModel,
                    },
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.ElbowConnector,
                        displayName: SymbolDisplayNameConstants.ElbowConnector,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/elbow-connector.svg`,
                        model: {
                            type: 'Orthogonal',
                        } as ConnectorModel,
                    },
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.ElbowConnectorTwoWay,
                        displayName: SymbolDisplayNameConstants.ElbowConnectorTwoWay,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/elbow-connector-twoway.svg`,
                        model: {
                            type: 'Orthogonal',
                            sourceDecorator: DiagramConstants.defaultConnectorSourceDecorator,
                        } as ConnectorModel,
                    },
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.CurvedConnector,
                        displayName: SymbolDisplayNameConstants.CurvedConnector,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/curved-connector.svg`,
                        model: {
                            type: 'Bezier',
                        } as ConnectorModel,
                    },
                    {
                        kind: 'ConnectorModel',
                        modelKind: 'ConnectorModel',
                        id: SymbolIdConstants.CurvedConnectorTwoWay,
                        displayName: SymbolDisplayNameConstants.CurvedConnectorTwoWay,
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.Connectors}/curved-connector-twoway.svg`,
                        model: {
                            type: 'Bezier',
                            sourceDecorator: DiagramConstants.defaultConnectorSourceDecorator,
                        } as ConnectorModel,
                    },
                ],
            },

            //#endregion

            //#region general

            {
                id: SymbolGroupConstants.General,
                displayName: SymbolGroupDisplayNameConstants.General,
                symbols: [
                    {
                        kind: 'ImageModel',
                        modelKind: 'NodeModel',
                        id: SymbolIdConstants.CustomImage,
                        displayName: SymbolDisplayNameConstants.CustomImage,
                        synonyms: [
                            'pictures',
                            'pics',
                            'images',
                            'pngs',
                            'jpegs',
                            'bitmaps',
                            'bmps',
                            'insert',
                            'files',
                            'albums',
                            'uploads'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.General}/custom-image.svg`,
                        model: {
                            shape: {
                                type: 'Image',
                            } as ImageModel,
                            style: {
                                // note: even though the documentation states that the default fill value is 'transparent', we're
                                // observing that it is actually 'white'. Hence explicitly setting it to 'transparent'.
                                fill: 'transparent',
                                strokeWidth: 0,
                            } as ShapeStyleModel,
                        } as NodeModel
                    },
                    {
                        kind: 'TextModel',
                        modelKind: 'NodeModel',
                        id: SymbolIdConstants.Text,
                        displayName: SymbolDisplayNameConstants.Text,
                        synonyms: [
                            'alphabets',
                            'labels',
                            'letters',
                            'numbers',
                            'textbox',
                            'words',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.General}/text.svg`,
                        model: {
                            shape: {
                                type: 'Text',
                                content: 'ABC'
                            } as TextModel,
                            style: {
                                color: ColorHexCodeConstants.black,
                                fontFamily: 'Roboto Mono',
                                fontSize: 14,
                                // note: even though the documentation states that the default fill value is 'transparent', we're
                                // observing that it is actually 'white'. Hence explicitly setting it to 'transparent'.
                                fill: 'transparent',
                            } as TextStyleModel,
                        } as NodeModel,
                    },
                ],
            },

            //#endregion

            //#region generic resources

            {
                id: SymbolGroupConstants.GenericResources,
                displayName: SymbolGroupDisplayNameConstants.GenericResource,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'access-point1',
                        displayName: 'Access Point1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/access-point1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'access-point2',
                        displayName: 'Access Point2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/access-point2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'active directory',
                        ],
                        id: 'ad-fs-proxy',
                        displayName: 'AD FS Proxy',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/ad-fs-proxy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'active directory',
                        ],
                        id: 'ad-fs',
                        displayName: 'AD FS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/ad-fs.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'android-phone',
                        displayName: 'Android Phone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/android-phone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-generic',
                        displayName: 'Application (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/application-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application-server',
                        displayName: 'Application Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/application-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'application',
                        displayName: 'Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/application.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'database',
                            'table',
                        ],
                        id: 'attributes',
                        displayName: 'Attributes',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/attributes.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'backup-local',
                        displayName: 'Backup (Local)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/backup-local.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'backup-online',
                        displayName: 'Backup (Online)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/backup-online.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'bluetooth',
                        displayName: 'Bluetooth',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/bluetooth.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'branch',
                        displayName: 'Branch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/branch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'browser',
                        displayName: 'Browser',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/browser.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bug',
                        displayName: 'Bug',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/bug.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'build',
                        displayName: 'Build',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/build.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cache',
                        displayName: 'Cache',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/cache.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'calendar',
                        displayName: 'Calendar',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/calendar.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'certificate',
                        displayName: 'Certificate',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/certificate.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'client-application',
                        displayName: 'Client Application',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/client-application.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud',
                        displayName: 'Cloud',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/cloud.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cluster-server',
                        displayName: 'Cluster Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/cluster-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'code-file',
                        displayName: 'Code File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/code-file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'code',
                        displayName: 'Code',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/code.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'command-line',
                        displayName: 'Command Line (CLI)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/command-line.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'commit',
                        displayName: 'Commit',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/commit.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'compass',
                        displayName: 'Compass',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/compass.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'connectors',
                        displayName: 'Connectors',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/connectors.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database',
                        displayName: 'Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/database.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database2',
                        displayName: 'Database2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/database2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-server',
                        displayName: 'Database Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/database-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-sync',
                        displayName: 'Database Sync',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/database-sync.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'developer-tools',
                        displayName: 'Developer Tools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/developer-tools.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'device',
                        displayName: 'Device',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/device.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'active directory',
                        ],
                        id: 'direct-access',
                        displayName: 'Direct Access',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/direct-access.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'document',
                        displayName: 'Document',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/document.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'document2',
                        displayName: 'Document2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/document2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'active directory',
                        ],
                        id: 'domain-controller',
                        displayName: 'Domain Controller',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/domain-controller.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'download',
                        displayName: 'Download',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/download.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ebook',
                        displayName: 'EBook',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/ebook.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'education',
                        displayName: 'Education1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/education.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'education2',
                        displayName: 'Education2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/education2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise',
                        displayName: 'Enterprise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/enterprise.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'enterprise2',
                        displayName: 'Enterprise2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/enterprise2.svg`,
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file',
                        displayName: 'File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'files',
                        displayName: 'Files',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/files.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'filter',
                        displayName: 'Filter',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/filter.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'firewall',
                        displayName: 'Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/firewall.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'folder-shared',
                        displayName: 'Folder (Shared)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/folder-shared.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'folder',
                        displayName: 'Folder',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/folder.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'folder2',
                        displayName: 'Folder2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/folder2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gateway',
                        displayName: 'Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'gear',
                        displayName: 'Gear',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/gear.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'globe',
                        displayName: 'Globe',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/globe.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'home',
                        displayName: 'Home',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/home.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'import',
                        displayName: 'Import',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/import.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'information',
                        displayName: 'Information',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/information.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'internet',
                        displayName: 'Internet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/internet.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'iphone',
                        displayName: 'IPhone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/iphone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'json-file',
                        displayName: 'JSON File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/json-file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key',
                        displayName: 'Key',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/key.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'keyboard',
                        displayName: 'Keyboard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/keyboard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laptop1',
                        displayName: 'Laptop1 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/laptop1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laptop2',
                        displayName: 'Laptop2 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/laptop2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'laptop3',
                        displayName: 'Laptop3 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/laptop3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'launch',
                        displayName: 'Launch',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/launch.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'learn',
                        displayName: 'Learn',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/learn.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'load-balancer-generic',
                        displayName: 'Load Balancer (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/load-balancer-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'location',
                        displayName: 'Location',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/location.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'locked',
                        displayName: 'Locked',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/locked.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'maintenance',
                        displayName: 'Maintenance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/maintenance.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'media-file',
                        displayName: 'Media File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/media-file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'message',
                        displayName: 'Message',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/message.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile1',
                        displayName: 'Mobile1 (Generic)',
                        synonyms: [
                            'android',
                            'ios',
                            'apple',
                            'blackberry',
                            'samsung',
                            'xiaomi',
                            'huawei',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/mobile1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile2',
                        displayName: 'Mobile2 (Generic)',
                        synonyms: [
                            'android',
                            'ios',
                            'apple',
                            'blackberry',
                            'samsung',
                            'xiaomi',
                            'huawei',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/mobile2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile3',
                        displayName: 'Mobile3 (Generic)',
                        synonyms: [
                            'android',
                            'ios',
                            'apple',
                            'blackberry',
                            'samsung',
                            'xiaomi',
                            'huawei',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/mobile3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mobile4',
                        displayName: 'Mobile4 (Generic)',
                        synonyms: [
                            'android',
                            'ios',
                            'apple',
                            'blackberry',
                            'samsung',
                            'xiaomi',
                            'huawei',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/mobile4.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'monitor',
                        displayName: 'Monitor',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/monitor.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'mouse',
                        displayName: 'Mouse',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/mouse.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'network-card',
                        displayName: 'Network Card',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/network-card.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'network1',
                        displayName: 'Network1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/network1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'network2',
                        displayName: 'Network2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/network2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pc1',
                        displayName: 'Personal Computer1 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/pc1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pc2',
                        displayName: 'Personal Computer2 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/pc2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'pc3',
                        displayName: 'Personal Computer3 (Generic)',
                        synonyms: [
                            'thinkpad',
                            'lenovo',
                            'asus',
                            'acer',
                            'dell',
                            'compaq',
                            'hewlett packard (hp)',
                            'macbook pro',
                            'microsoft surface',
                            'pcs',
                            'personal computers'
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/pc3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'phone',
                        displayName: 'Phone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/phone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'plug-and-play',
                        displayName: 'Plug And Play',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/plug-and-play.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'power',
                        displayName: 'Power',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/power.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'protocol-stack',
                        displayName: 'Protocol Stack',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/protocol-stack.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'queue-generic',
                        displayName: 'Queue (Generic)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/queue-generic.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'recent',
                        displayName: 'Recent',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/recent.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'recent2',
                        displayName: 'Recent2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/recent2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rdp',
                        ],
                        id: 'remote-desktop',
                        displayName: 'Remote Desktop',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/remote-desktop.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'reservation',
                        displayName: 'Reservation',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/reservation.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'reservation2',
                        displayName: 'Reservation2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/reservation2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'active directory',
                            'rms',
                        ],
                        id: 'rms-connector',
                        displayName: 'Rights Management Connector',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/rms-connector.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'router1',
                        displayName: 'Router1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/router1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'router2',
                        displayName: 'Router2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/router2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'router3',
                        displayName: 'Router3',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/router3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'router4',
                        displayName: 'Router4',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/router4.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'scale',
                        displayName: 'Scale',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/scale.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'scheduler',
                        displayName: 'Scheduler',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/scheduler.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'script-file',
                        displayName: 'Script File',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/script-file.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'script-file2',
                        displayName: 'Script File2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/script-file2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'search',
                        displayName: 'Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/search.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'search2',
                        displayName: 'Search2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/search2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        id: 'server-blade',
                        displayName: 'Server Blade',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server-blade.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        id: 'server-directory',
                        displayName: 'Server Directory',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server-directory.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server-farm',
                        displayName: 'Server Farm',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server-farm.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        id: 'server-farm2',
                        displayName: 'Server Farm2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server-farm2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        id: 'server-rack',
                        displayName: 'Server Rack',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server-rack.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'server1',
                        displayName: 'Server 1 (Generic)',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'rack',
                            'data centers',
                            'datacenters',
                            'data centres',
                            'datacentres',
                        ],
                        id: 'server2',
                        displayName: 'Server2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/server2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'settings',
                        displayName: 'Settings',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/settings.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'smartcard',
                        displayName: 'Smartcard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/smartcard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'hard drive',
                            'hdd',
                            'ssd',
                        ],
                        id: 'ssd',
                        displayName: 'SSD',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/ssd.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage',
                        displayName: 'Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'stored-procedure',
                        displayName: 'Stored Procedure',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/stored-procedure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'support',
                        displayName: 'Support',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/support.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'support2',
                        displayName: 'Support2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/support2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'switch1',
                        displayName: 'Switch1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/switch1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'switch2',
                        displayName: 'Switch2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/switch2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'excel',
                            'database',
                            'spreadsheet'
                        ],
                        id: 'table1',
                        displayName: 'Table1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/table1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'excel',
                            'database',
                            'spreadsheet'
                        ],
                        id: 'table2',
                        displayName: 'Table2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/table2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'excel',
                            'database',
                            'spreadsheet'
                        ],
                        id: 'table3',
                        displayName: 'Table3',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/table3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tablet',
                        displayName: 'Tablet',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/tablet.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'task',
                        displayName: 'Task',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/task.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'backlog',
                            'checklist',
                            'list',
                            'task',
                        ],
                        id: 'todo',
                        displayName: 'Todo',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/todo.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tools',
                        displayName: 'Tools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/tools.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tools2',
                        displayName: 'Tools2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/tools2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'trigger',
                        displayName: 'Trigger',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/trigger.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tunnel',
                        displayName: 'Tunnel',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/tunnel.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'unlocked',
                        displayName: 'Unlocked',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/unlocked.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'usb',
                        displayName: 'USB',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/usb.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user',
                        displayName: 'User',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'users',
                        displayName: 'Users',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/users.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user-approval',
                        displayName: 'User Approval',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user-approval.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user-privacy',
                        displayName: 'User Privacy1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user-privacy.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user-privacy2',
                        displayName: 'User Privacy2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user-privacy2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user-resource',
                        displayName: 'User Resource',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user-resource.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'user2',
                        displayName: 'User2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/user2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'users2',
                        displayName: 'Users2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/users2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'video',
                        displayName: 'Video',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/video.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine',
                        displayName: 'Virtual Machine',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/virtual-machine.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'virtual-machine-secure',
                        displayName: 'Virtual Machine (Secure)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/virtual-machine-secure.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-environment',
                        displayName: 'Web Environment',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/web-environment.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-server',
                        displayName: 'Web Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/web-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web-test',
                        displayName: 'Web Test',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/web-test.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'web',
                        displayName: 'Web',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/web.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'website',
                        displayName: 'Website',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/website.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi-low1',
                        displayName: 'Wifi Low1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi-low1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi-low2',
                        displayName: 'Wifi Low2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi-low2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi-offline1',
                        displayName: 'Wifi Offline',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi-offline1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi1',
                        displayName: 'Wifi1',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi1.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi2',
                        displayName: 'Wifi2',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi2.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi3',
                        displayName: 'Wifi3',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi3.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'networking',
                        ],
                        id: 'wifi4',
                        displayName: 'Wifi4',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/wifi4.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'windows-server',
                        displayName: 'Windows Server',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/windows-server.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workstation-client',
                        displayName: 'Workstation Client',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.General}/${SymbolGroupConstants.GenericResources}/workstation-client.svg`
                    },
                ],
            },

            //#endregion generic resources
        ],
    },

    //#endregion General

    //#region OCI

    {
        id: SymbolFamilyConstants.Oracle,
        displayName: 'Oracle Cloud Infrastructure (OCI)',
        SymbolGroups: [

            //#region OCI Compute

            {
                id: SymbolGroupConstants.OCICompute,
                displayName: SymbolGroupDisplayNameConstants.OCICompute,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'autoscale',
                        displayName: 'Auto Scale',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/autoscale.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bm',
                        displayName: 'Bare Metal Compute',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/bm.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'container',
                        displayName: 'Container',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/container.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'functions',
                        displayName: 'Functions',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/functions.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'instance-pools',
                        displayName: 'Instance Pools',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/instance-pools.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'container',
                            'docker',
                            'kubernetes',
                            'k8s',
                        ],
                        id: 'ocir',
                        displayName: 'OCI Registry (OCIR)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/ocir.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        synonyms: [
                            'container',
                            'docker',
                            'kubernetes',
                            'k8s',
                        ],
                        id: 'oke',
                        displayName: 'OCI Kubernetes Engine (OKE)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/oke.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vm',
                        displayName: 'Virtual Machine (VM)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCICompute}/vm.svg`
                    },
                ],
            },

            //#endregion OCI Compute

            //#region OCI Connectivity

            {
                id: SymbolGroupConstants.OCIConnectivity,
                displayName: SymbolGroupDisplayNameConstants.OCIConnectivity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'backbone',
                        displayName: 'Backbone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/backbone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cdn',
                        displayName: 'CDN',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/cdn.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'customer-data-center',
                        displayName: 'Customer Data Center',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/customer-data-center.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'customer-premise',
                        displayName: 'Customer Premise',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/customer-premise.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'disconnected-regions',
                        displayName: 'Disconnected Regions',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/disconnected-regions.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dns',
                        displayName: 'DNS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/dns.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'fast-connect',
                        displayName: 'Fast Connect',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/fast-connect.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'nat-gateway',
                        displayName: 'NAT Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/nat-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vpn',
                        displayName: 'Virtual Private Network (VPN)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIConnectivity}/vpn.svg`
                    },
                ],
            },

            //#endregion OCI Connectivity

            //#region OCI Data Management

            {
                id: SymbolGroupConstants.OCIDataManagement,
                displayName: SymbolGroupDisplayNameConstants.OCIDataManagement,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'autonomous-database',
                        displayName: 'Autonomous Database',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/autonomous-database.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'bigdata-service',
                        displayName: 'BigData Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/bigdata-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-migration-service',
                        displayName: 'Database Migration Service (DMS)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/database-migration-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'database-service',
                        displayName: 'Database Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/database-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-catalog',
                        displayName: 'Data Catalog (DC)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/data-catalog.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-integration-service',
                        displayName: 'Data Integration Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/data-integration-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-science',
                        displayName: 'Data Science',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/data-science.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'streaming',
                        displayName: 'Streaming',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDataManagement}/streaming.svg`
                    },
                ],
            },

            //#endregion OCI Data Management

            //#region OCI DevOps

            {
                id: SymbolGroupConstants.OCIDevOps,
                displayName: SymbolGroupDisplayNameConstants.OCIDevOps,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-gateway',
                        displayName: 'API Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDevOps}/api-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'api-service',
                        displayName: 'API Service',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDevOps}/api-service.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'resource-mgr',
                        displayName: 'Resource Manager',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIDevOps}/resource-mgr.svg`
                    },
                ],
            },

            //#endregion OCI DevOps

            //#region OCI Governance

            {
                id: SymbolGroupConstants.OCIGovernance,
                displayName: SymbolGroupDisplayNameConstants.OCIGovernance,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'auditing',
                        displayName: 'Auditing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/auditing.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'compartments',
                        displayName: 'Compartments',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/compartments.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'groups',
                        displayName: 'Groups',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/groups.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'logging',
                        displayName: 'Logging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/logging.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'market-place',
                        displayName: 'Marketplace',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/market-place.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ocid',
                        displayName: 'Oracle Cloud Identifier (OCID)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/ocid.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'policies',
                        displayName: 'Policies',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/policies.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'tagging',
                        displayName: 'Tagging',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIGovernance}/tagging.svg`
                    },
                ],
            },

            //#endregion OCI Governance

            //#region OCI Monitoring

            {
                id: SymbolGroupConstants.OCIMonitoring,
                displayName: SymbolGroupDisplayNameConstants.OCIMonitoring,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'alarm',
                        displayName: 'Alarm',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/alarm.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'email-delivery',
                        displayName: 'Email Delivery',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/email-delivery.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'events',
                        displayName: 'Events',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/events.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'health-check',
                        displayName: 'Health Check',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/health-check.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'notifications',
                        displayName: 'Notifications',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/notifications.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'queuing',
                        displayName: 'Queuing',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/queuing.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'search',
                        displayName: 'Search',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/search.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'telemetry',
                        displayName: 'Telemetry',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/telemetry.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'workflow',
                        displayName: 'Workflow',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIMonitoring}/workflow.svg`
                    },
                ],
            },

            //#endregion OCI Monitoring

            //#region OCI Networking

            {
                id: SymbolGroupConstants.OCINetworking,
                displayName: SymbolGroupDisplayNameConstants.OCINetworking,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'dynamic-routing-gateway',
                        displayName: 'Dynamic Routing Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/dynamic-routing-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'firewall',
                        displayName: 'Firewall',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/firewall.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'internet-gateway',
                        displayName: 'Internet Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/internet-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'load-balancer',
                        displayName: 'Load Balancer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/load-balancer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'route-table',
                        displayName: 'Route Table',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/route-table.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'security-lists',
                        displayName: 'Security Lists',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/security-lists.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'service-gateway',
                        displayName: 'Service Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/service-gateway.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vcloudnetwork',
                        displayName: 'Virtual Cloud Network',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCINetworking}/virtual-cloud-network.svg`
                    },
                ],
            },

            //#endregion OCI Networking

            //#region OCI Security

            {
                id: SymbolGroupConstants.OCISecurity,
                displayName: SymbolGroupDisplayNameConstants.OCISecurity,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'cloud-guard',
                        displayName: 'Cloud Guard',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/cloud-guard.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'ddos',
                        displayName: 'DDOS',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/ddos.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'encryption',
                        displayName: 'Encryption',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/encryption.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'id-access',
                        displayName: 'ID & Access Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/id-access.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'key-management',
                        displayName: 'Key Management',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/key-management.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'max-security-zone',
                        displayName: 'Max Security Zone',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/max-security-zone.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'vault',
                        displayName: 'Vault',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/vault.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'waf',
                        displayName: 'Web Application Firewall (WAF)',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCISecurity}/waf.svg`
                    },
                ],
            },

            //#endregion OCI Security

            //#region OCI Storage

            {
                id: SymbolGroupConstants.OCIStorage,
                displayName: SymbolGroupDisplayNameConstants.OCIStorage,
                symbols: [
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'backup-restore',
                        displayName: 'Backup & Restore',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/backup-restore.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'block-storage',
                        displayName: 'Block Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/block-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'block-storage-cloning',
                        displayName: 'Block Storage Cloning',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/block-storage-cloning.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'buckets',
                        displayName: 'Buckets',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/buckets.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'data-transfer',
                        displayName: 'Data Transfer',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/data-transfer.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'elastic-performance',
                        displayName: 'Elastic Performance',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/elastic-performance.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'file-storage',
                        displayName: 'File Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/file-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'object-storage',
                        displayName: 'Object Storage',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/object-storage.svg`
                    },
                    {
                        kind: 'NativeModel',
                        modelKind: 'NodeModel',
                        id: 'storage-gateway',
                        displayName: 'Storage Gateway',
                        svgUrl: `${UrlConstants.cdnUrlPrefix}/assets/stencils/${SymbolFamilyConstants.Oracle}/${SymbolGroupConstants.OCIStorage}/storage-gateway.svg`
                    },
                ],
            },

            //#endregion OCI Storage

        ],
    },

    //#endregion OCI
];
