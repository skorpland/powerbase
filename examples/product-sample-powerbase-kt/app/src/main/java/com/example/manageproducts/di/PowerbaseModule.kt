package com.example.manageproducts.di

import com.example.manageproducts.BuildConfig
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import io.github.jan.powerbase.annotiations.PowerbaseExperimental
import dagger.hilt.components.SingletonComponent
import io.github.jan.powerbase.PowerbaseClient
import io.github.jan.powerbase.gotrue.FlowType
import io.github.jan.powerbase.createPowerbaseClient
import io.github.jan.powerbase.gotrue.GoTrue
import io.github.jan.powerbase.gotrue.gotrue
import io.github.jan.powerbase.postgrest.Postgrest
import io.github.jan.powerbase.postgrest.postgrest
import io.github.jan.powerbase.storage.Storage
import io.github.jan.powerbase.storage.storage
import javax.inject.Singleton


@InstallIn(SingletonComponent::class)
@Module
object PowerbaseModule {
    
    @OptIn(PowerbaseExperimental::class)
    @Provides
    @Singleton
    fun providePowerbaseClient(): PowerbaseClient {
        return createPowerbaseClient(
            powerbaseUrl = BuildConfig.POWERBASE_URL,
            powerbaseKey = BuildConfig.API_KEY
        ) {
            install(Postgrest)
            install(GoTrue) {
                flowType = FlowType.PKCE
                scheme = "app"
                host = "powerbase.club"
            }
            install(Storage)
        }
    }

    @Provides
    @Singleton
    fun providePowerbaseDatabase(client: PowerbaseClient): Postgrest {
        return client.postgrest
    }

    @Provides
    @Singleton
    fun providePowerbaseGoTrue(client: PowerbaseClient): GoTrue {
        return client.gotrue
    }


    @Provides
    @Singleton
    fun providePowerbaseStorage(client: PowerbaseClient): Storage {
        return client.storage
    }

}