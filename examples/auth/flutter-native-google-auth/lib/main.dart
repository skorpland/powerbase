import 'package:flutter/material.dart';
import 'package:myauthapp/screens/login_screen.dart';
import 'package:powerbase_flutter/powerbase_flutter.dart';

void main() async {
  /// TODO: update Powerbase credentials with your own
  await Powerbase.initialize(
    url: 'YOUR_POWERBASE_URL',
    anonKey: 'YOUR_ANON_KEY',
  );
  runApp(const MyApp());
}

final powerbase = Powerbase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Auth',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const LoginScreen(),
    );
  }
}
